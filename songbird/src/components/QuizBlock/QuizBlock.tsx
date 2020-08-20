import React, { Component } from 'react';
import './QuizBlock.sass';
import { appConfig } from '../../config/appConfig';

type quizVariantsProps = { 
    currentLevel: number,
    correctAnswer: string,
    levelData: any,
    levelScore: any,
    showInfo: any
}

interface quizItemProps {
    data: string, 
    correctAnswer: string, 
    onAnswered: any,
    onIncorrect: any
}

let triesCounter = 0;

class QuizItem extends Component<quizItemProps, { indicatorClass: string, count: number }> {
    answerIndicator = React.createRef<HTMLSpanElement>();

    constructor(props: quizItemProps){
        super(props);
        this.state = { 
            indicatorClass: '',
            count: 0
        }
    }
 
    componentWillReceiveProps() {
        if (this.state.indicatorClass !== '') this.setState({ indicatorClass: '' })
        triesCounter = 0;
    }
    
    checkAnswer(e: any) {
        e.preventDefault();

        let indicator = (e.target.dataset.item === this.props.correctAnswer) ? 'correct' : 'incorrect';
        this.setState({ indicatorClass: indicator}, () => { this.playSoundEffect(indicator); }); 

        if (indicator === 'incorrect') {
            triesCounter++;
            this.props.onIncorrect();
        }
        if (indicator === 'correct') this.props.onAnswered(this.calculateLevelScore());
    }

    calculateLevelScore = () => {
        const maxLevelScore = appConfig.levelScore;
        return maxLevelScore - triesCounter;
    }
 
    playSoundEffect(state: string) {
        const src = `./sfx/${state}.wav`;
        const soundEffect = new Audio(src);
        const playPromise = soundEffect.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => { console.log('Playback was prevented:', error); });
        }
    }

    render() {  
        const { indicatorClass } = this.state;
        
        let resultClass = '';
        resultClass = (indicatorClass) ? 'disabled' : resultClass;
        resultClass = (indicatorClass === 'correct') ? 'correct-disabled' : resultClass;

        return (
            <li onClick = {(e) => { this.checkAnswer(e) }} data-item = { this.props.data } className = { resultClass }>
                <span className = { `list__indicator ${indicatorClass}` } ref = { this.answerIndicator }></span>
                <span className = 'list__text' data-item = { this.props.data }>{ this.props.data }</span>
            </li>
        );
    }
  };

export default class QuizBlock extends Component<quizVariantsProps> {
    state = { buttonsBlocked: false }

    handleAnsweredLevel = (score : number) => {
        this.setState({ buttonsBlocked: true });
        this.props.levelScore(score);
    }

    handleUnansweredLevel = () => {
        this.props.showInfo();
    }

    componentWillReceiveProps() {
        if (this.state.buttonsBlocked) this.setState({ buttonsBlocked: false })
    }

    render() {
        const { levelData, correctAnswer } = this.props;
        const quizElements = [...levelData].map((index) => { 
            return (
                <QuizItem 
                    data = { index.name.common } 
                    correctAnswer = {correctAnswer} 
                    key = {`item-${index.id}`} 
                    onAnswered = { this.handleAnsweredLevel }
                    onIncorrect = { this.handleUnansweredLevel } />
            )
        });

        const listClassName = 'quiz-block__list';
        return (
            <div className = 'container quiz-block' >
                <ul className = {(this.state.buttonsBlocked) ? `${listClassName} disable-buttons` : listClassName }>
                    { quizElements }
                </ul>
            </div>
        )
    }
};
 