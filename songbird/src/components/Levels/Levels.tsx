import React, { Component } from 'react';
import './Levels.sass';

import QUIZ_DATA from '../../context/quizData.json';

type levelItemProps = {
  level: number,
  selected?: boolean,
}

type levelsProps = {
  levels: number,
  currentLevel: number
}

class LevelItem extends Component<levelItemProps> {
  render() {
    const {level} = this.props;
    return (<span>{ level + 1 }</span>);
  }
};

export default class Levels extends Component<levelsProps> {
  render(){
    const { levels, currentLevel} = this.props;
    
    const levelElements = [...Array(levels).keys()].map((index) => { 
      const lvl: number = index + 1;
     
      let itemClassName: string = 'level-list__item';
      if (currentLevel + 1 === lvl) itemClassName += ' active ';

      return (
        <li key = {`lvl-${index}`} className = { itemClassName }>
          <LevelItem level = {index} />
        </li>);
    });
    
    return(
      <div className = 'level-container'>
        <ul className = 'level-list'>
          { levelElements }
        </ul>
        <h2 className = 'level-name'>{ QUIZ_DATA[currentLevel].name }</h2>
      </div>
    );
    
  }
};
