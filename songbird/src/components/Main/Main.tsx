import React, { Component } from 'react'
import'../Main/Main.sass';

import QUIZ_DATA from '../../context/quizData.json';

import QuestionBlock from '../QuestionBlock/QuestionBlock';
import QuizBlock from '../QuizBlock/QuizBlock';
import InfoBlock from '../InfoBlock/InfoBlock';
import Button from '../Button/Button';

import APIService from '../../services/APIService';

import { appConfig, quizItemProps, itemNamesProps } from '../../config/appConfig';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { pickRandomCorrectAnswer } from '../../utilities/dataManager';

const DEFAULT_SOURCE = '#';

interface mainProps {
    currentLevel: number,
    onChange: any,
    onFinish: any,
    addScore: any
}

export default class Main extends Component<mainProps> {
    apiService = new APIService();

    state = {
        isLoading: true,
        hasError: false,
        errorType: null,
        hasAnswered: false,
        showInfo: false,
        answer: pickRandomCorrectAnswer(this.props.currentLevel),
        summary: null,
        link: undefined,
        image: null,
        audio: DEFAULT_SOURCE,
        video: null,
        currentLevel: this.props.currentLevel
    };

    componentDidMount() {
        this.updateQuiz();
        console.log(`Correct answer for Level ${this.state.currentLevel}: ${this.state.answer.name.common}`);
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

    getQuizData(name: itemNamesProps) {
        const quizImage = this.apiService.getImage(name.full);
        const quizAudio = this.apiService.getAudio(name.scientific);
        const quizVideo = this.apiService.getVideo(name.scientific);
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

        Promise.allSettled(this.getQuizData(this.state.answer.name))
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
                    summary: quizData.summary,
                    link: quizData.link,
                    image: quizData.image,
                    audio: quizData.audio,
                    video: quizData.video,
                });

            });
    }

    showInfo = () => {
        console.log('SHOW INFO');
        this.setState({
            showInfo: true
        });
    }

    nextLevel = () => {
        const { currentLevel } = this.state;
        const { onChange, onFinish } = this.props; 

        if (currentLevel < appConfig.levels) {
            const nextLevel = currentLevel + 1;
            const newAnswer = pickRandomCorrectAnswer(nextLevel);
    
            this.setState({
                hasAnswered: false,
                currentLevel: nextLevel,
                answer: newAnswer
            }, () => { 
                this.updateQuiz();
                console.log(`Correct answer for Level ${this.state.currentLevel}: ${this.state.answer.name.common}`);
             }); 
            onChange();
        } else onFinish();
    }

    handleScore = (score: number) => {
        this.props.addScore(score);
        this.setState({
            hasAnswered: true
        })
    }

    render() {
        const { answer, summary, link, image, audio, video, currentLevel, hasAnswered, isLoading, showInfo } = this.state;

        return (
            <div className = 'main'>
                <ErrorMessage hasError = { this.state.hasError } errorType = {this.state.errorType }/>
                <QuestionBlock 
                    isLoading = { isLoading }
                    hasAnswered = { hasAnswered }
                    image = {image} 
                    audio = {audio} 
                    answer = {answer}
                />
                <QuizBlock 
                    currentLevel = { currentLevel } 
                    levelData = { QUIZ_DATA[currentLevel - 1].birds } 
                    correctAnswer = { answer?.name.common } 
                    levelScore = { this.handleScore }
                    showInfo = { this.showInfo }
                />
                <InfoBlock 
                    isLoading = { isLoading }
                    hasAnswered = {hasAnswered }
                    showInfo = { showInfo }
                    summary = {summary} 
                    link = {link} 
                    audio = {audio} 
                    video = {video}
                    image = {image} 
                    answer = {answer} 
                />
                <Button 
                    hasAnswered = { hasAnswered } 
                    loadNextLevel = { this.nextLevel }
                    currentLevel = { currentLevel } 
                />
            </div>
        )
    }
}
