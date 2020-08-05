import React, { Component } from 'react'
import'../Main/Main.sass';

import QuestionBlock from '../QuestionBlock/QuestionBlock';
import QuizBlock from '../QuizBlock/QuizBlock';
import InfoBlock from '../InfoBlock/InfoBlock';
import APIService from '../../services/APIService';

import QUIZ_INFO from '../../context/quizData.json';

const DEFAULT_SOURCE = '#';

export default class Main extends Component {
    apiService = new APIService();

    quizAnswer = QUIZ_INFO[0].birds[0];

    state = {
        answer: this.quizAnswer,
        summary: null,
        link: null,
        image: DEFAULT_SOURCE,
        audio: DEFAULT_SOURCE,
        video: null
    };

    constructor() {
        super();
        this.updateQuiz();
    }

    updateQuiz() {
       this.apiService.getImage(this.state.answer.name)
        .then((imageURL) => { this.setState({
            image: imageURL
        }) });
    }

    render() {
        const { answer, summary, link, image, audio, video} = this.state;
        return (
            <div className = 'main'>
                <QuestionBlock 
                    image = {image} 
                    audio = {audio} 
                    answer = {answer}/>
                <QuizBlock />
                <InfoBlock 
                    summary = {summary} 
                    link = {link} 
                    audio = {audio} 
                    video = {video}
                    image = {image} 
                    answer = {answer} />
            </div>
        )
    }
}
