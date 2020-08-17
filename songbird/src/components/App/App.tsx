import React, { Component } from 'react';
import { appConfig as config } from '../../config/appConfig';

import Levels from '../Levels/Levels';
import Score from '../Score/Score';
import Main from '../Main/Main';

import './App.sass';
import { pickRandomCorrectAnswer } from '../../utilities/dataManager';

export default class App extends Component {
  componentDidMount() {
    this.updateApp();
  }

  state = {
    currentScore: 0,
    maxLevelScore: 5,
    currentLevel: 0,
  }

  answer = pickRandomCorrectAnswer(this.state.currentLevel);

  updateApp() {
    // this.answer = pickRandomCorrectAnswer(this.state.currentLevel);
    console.log(`Correct answer for Level ${this.state.currentLevel + 1}: ${this.answer.name.common}`);
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
          <Main currentLevel = { this.state.currentLevel } answer = { this.answer }/>
        </div>
      );
  }
}
