import React, { Component } from 'react';
import { appConfig as config } from '../../config/appConfig';

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
    showStartGame: false
  }

  handleNextLevel = (score : number) => {
    this.setState({
      currentLevel: this.state.currentLevel + 1
    });
    this.handleScore(score);
  }

  handleScore = (score : number) => {
    if (!score) return; 
    this.setState({
      currentScore: this.state.currentScore + score
    });
  }

  closeStartGame = () => {
    console.log('close modal');
    this.setState({
      showStartGame: !this.state.showStartGame
    });

  }
  render() {
    if (this.state.showStartGame) return <Modal show = { this.state.showStartGame } onClose = { this.closeStartGame }/>

    return (
      <div className = 'app'>   
        <div className = 'header'>
          <h1 className = 'title'>Songbird</h1>
          <Score score = { this.state.currentScore } />
        </div>
        <div className = 'subheader'>
          <Levels levels = { config.levels } currentLevel = { this.state.currentLevel } /> 
        </div>
        <Main currentLevel = { this.state.currentLevel } onChange = { this.handleNextLevel } addScore = { this.handleScore }/>
      </div>
    );
  }
}
