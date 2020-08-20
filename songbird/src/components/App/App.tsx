import React, { Component } from 'react';
import { appConfig as config, quizResults } from '../../config/appConfig';

import Levels from '../Levels/Levels';
import Score from '../Score/Score';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';

import './App.sass';

export default class App extends Component {
  state = {
    currentScore: 0,
    maxLevelScore: config.levels,
    currentLevel: config.initLevel,
    showStartGame: false,
    showFinishGame: false
  }

  handleNextLevel = (score : number) => {
    this.setState({
      currentLevel: this.state.currentLevel + 1
    });
    this.handleScore(score);
  }

  restartGame = () => {
    console.log('restart game');
  }

  handleScore = (score : number) => {
    if (!score) return; 
    this.setState({
      currentScore: this.state.currentScore + score
    });
  }

  closeStartGame = () => {
    this.setState({
      showStartGame: !this.state.showStartGame
    });
  }

  toggleFinishScreen = () => {
    this.setState({
      showFinishGame: !this.state.showFinishGame
    });
  }

  render() {
    if (this.state.showStartGame) return <Modal show = { this.state.showStartGame } onClose = { this.closeStartGame }/>

    if (this.state.showFinishGame) {
      const resultInformation = quizResults.filter((result) => result.range.min <= this.state.currentScore && result.range.max >= this.state.currentScore);

      return (
        <div className = 'app'>   
          <div className = 'header'>
            <h1 className = 'title' onClick = { this.restartGame }>Songbird</h1>
            <Score score = { this.state.currentScore } />
          </div>
         <div className = 'result-block'>
            <h3 className = 'result-block__overtitle'>Based on your score, you are...</h3>
            <h1 className = 'result-block__title'>{ resultInformation[0].title }</h1>
            <p className = 'result-block__summary'>{ resultInformation[0].summary }</p>
         </div>
         <button className = 'try-again' onClick = { this.restartGame }>Try Again</button>
        </div>
      );
    }

    return (
      <div className = 'app'>   
        <div className = 'header'>
          <h1 className = 'title'>Songbird</h1>
          <Score score = { this.state.currentScore } />
        </div>
        <div className = 'subheader'>
          <Levels levels = { config.levels } currentLevel = { this.state.currentLevel } /> 
        </div>
        <Main 
          currentLevel = { this.state.currentLevel } 
          onChange = { this.handleNextLevel } 
          onFinish = { this.toggleFinishScreen }
          addScore = { this.handleScore }/>
      </div>
    );
  }
}
