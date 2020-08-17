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
    showStartGame: true
  }

  handleNextLevel = () => {
    this.setState({
      currentLevel: this.state.currentLevel + 1
    })
  }

  closeStartGame = () => {
    console.log('close modal');
    this.setState({
      showStartGame: !this.state.showStartGame
    });

  }
  render() {
      return (
        <div className = 'app'>   
          <div className = 'header'>
            <h1 className = 'title'>Songbird</h1>
            <Score score = { this.state.currentScore } />
          </div>
          <div className = 'subheader'>
            <Levels levels = { config.levels } currentLevel = { this.state.currentLevel } /> 
          </div>
          <Main currentLevel = { this.state.currentLevel } onChange = { this.handleNextLevel }/>
          <Modal show = { this.state.showStartGame } onClose = { this.closeStartGame }/>
        </div>
      );
  }
}
