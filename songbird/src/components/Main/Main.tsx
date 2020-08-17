import React, { Component } from 'react'
import'../Main/Main.sass';

import QuestionBlock from '../QuestionBlock/QuestionBlock';
import QuizBlock from '../QuizBlock/QuizBlock';
import InfoBlock from '../InfoBlock/InfoBlock';
import APIService from '../../services/APIService';
import { quizItemProps, appConfig } from '../../config/appConfig';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import QUIZ_DATA from '../../context/quizData.json';
import Button from '../Button/Button';

import { pickRandomCorrectAnswer } from '../../utilities/dataManager';

const DEFAULT_SOURCE = '#';

interface mainProps {
    currentLevel: number,
    answer: quizItemProps
}

export default class Main extends Component<mainProps> {
    apiService = new APIService();

    state = {
        isLoading: true,
        hasError: false,
        errorType: null,
        hasAnswered: true,
        answer: this.props.answer,
        summary: null,
        link: undefined,
        image: null,
        audio: DEFAULT_SOURCE,
        video: null,
        currentLevel: this.props.currentLevel
    };

    componentDidMount() {
        this.updateQuiz();
    }

    onContentLoaded() {
        this.setState({
            isLoading: false
        })
    }

    onError = (error: {}) => {
        this.setState({
          hasError: true,
          isLoading: false,
          errorType: error
        });
    }

    getQuizData() {
        const { name } = this.state.answer;

        const quizImage = this.apiService.getImage(name.full);
        const quizAudio = this.apiService.getAudio(name.full);
        const quizVideo = this.apiService.getVideo(name.common);
        const quizSummary = this.apiService.getDescription(name.full);
        const quizLink = this.apiService.getLink(name.full);

        const quizData = [quizImage, quizAudio, quizVideo, quizSummary, quizLink];
        return quizData;
    }

    async updateQuiz() {
        const quizData : any = {};
        const quizDataKey : any = {
            0: 'image',
            1: 'audio',
            2: 'video',
            3: 'summary',
            4: 'link'
        };

        Promise.allSettled(this.getQuizData())
            .then(results => {
                results.forEach((result, index) => {
                    if (result.status === 'fulfilled') {
                        const i = index.toString();
                        const key = (Object.keys(quizDataKey).includes(i)) ? quizDataKey[i] : '' ;
                        quizData[key] = result.value;
                    } else this.onError(result.reason)
                });

                this.setState({
                    isLoading: false,
                    answer: this.props.answer,
                    summary: quizData.summary,
                    link: quizData.link,
                    image: quizData.image,
                    audio: quizData.audio,
                    video: quizData.video,
                });

            });
    }

    nextLevel = () => {
        const { currentLevel } = this.state;

        if (currentLevel + 1 < appConfig.levels) {
            const nextLevel = currentLevel + 1;
            const newAnswer = pickRandomCorrectAnswer(nextLevel);
    
            this.setState({
                currentLevel: nextLevel,
                answer: newAnswer
            }); 
        }
    }

    render() {
        const { answer, summary, link, image, audio, video, currentLevel, hasAnswered, isLoading } = this.state;

        return (
            <div className = 'main'>
                <ErrorMessage hasError = { this.state.hasError } errorType = {this.state.errorType }/>
                <QuestionBlock 
                    isLoading = { isLoading }
                    hasAnswered = { hasAnswered }
                    image = {image} 
                    audio = {audio} 
                    answer = {answer}/>
                <QuizBlock currentLevel = { currentLevel } levelData = { QUIZ_DATA[this.state.currentLevel].birds } correctAnswer = { answer?.name.common }/>
                <InfoBlock 
                    isLoading = { isLoading }
                    hasAnswered = {hasAnswered }
                    summary = {summary} 
                    link = {link} 
                    audio = {audio} 
                    video = {video}
                    image = {image} 
                    answer = {answer} />
                <Button hasAnswered = { hasAnswered } loadNextLevel = { this.nextLevel } />
            </div>
        )
    }
}
