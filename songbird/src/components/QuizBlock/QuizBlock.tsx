import React, { Component } from 'react';
import './QuizBlock.sass';
import { quizState } from '../../context/quizState';

type quizVariantsProps = { 
    currentLevel: number,
    correctAnswer: string,
    levelData: any
}

class QuizItem extends Component<{data: string, correctAnswer: string}> {
    answerIndicator = React.createRef<HTMLSpanElement>();
    state = { indicatorClass: '' }

    componentWillReceiveProps() {
        if (this.state.indicatorClass !== '') this.setState({ indicatorClass: '' })
    }
    
    checkAnswer(e: any) {
        e.preventDefault();
        let indicator = (e.target.dataset.item === this.props.correctAnswer) ? 'correct' : 'incorrect';
        this.setState({ indicatorClass: indicator}, () => { this.playSoundEffect(indicator); }); 

        if (indicator === 'correct') quizState.hasAnswered = true;   
    }

    playSoundEffect(state: string) {
        const src = `sfx/${state}.wav`;
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
            <li onClick = {(e) => {this.checkAnswer(e)}} data-item = { this.props.data } className = { resultClass }>
                <span className = { `list__indicator ${indicatorClass}` } ref = { this.answerIndicator }></span>
                <span className = 'list__text' data-item = { this.props.data }>{ this.props.data }</span>
            </li>
        );
    }
  };

export default class QuizBlock extends Component<quizVariantsProps> {
    render() {
        const { levelData, correctAnswer } = this.props;
        const quizElements = [...levelData].map((index) => { 
            return (
                <QuizItem data = { index.name.common } correctAnswer = {correctAnswer} key = {`item-${index.id}`} />
            )
        });
        return (
            <div className = 'container quiz-block' >
                <ul className = {'quiz-block__list'}>
                    { quizElements }
                </ul>
            </div>
        )
    }
};
 