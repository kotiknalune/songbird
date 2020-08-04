import React, { Component } from 'react';
import './Levels.sass';

type levelItemProps = {
  level: number,
  selected?: boolean,
}

type levelsProps = {
  levels: number
}

type levelsState = {
  activeLevel: number
}

class LevelItem extends Component<levelItemProps> {
  // onItemHover = (event: { target: {} }) => {
  //   const target : {} = event.target;
  //   console.log(target);
  // };

  // onMouseEnter = { this.onItemHover } 
 
  render() {
    const {level, selected = false } = this.props;
    return (<span>{ level + 1 }</span>);
  }
};

export default class Levels extends Component<levelsProps, levelsState> {
  state = {
    activeLevel: 1
  }

  //this.setState({ activeLevel++ });

  render(){
    const {levels} = this.props;
    const { activeLevel } = this.state;
    
    const levelElements = [...Array(levels).keys()].map((index) => { 
      const lvl: number = index + 1;
      let dividerClassName: string = '';
      let itemClassName: string = 'level-list__item';

      if (activeLevel === lvl) {
        dividerClassName += ' active ';
        itemClassName += ' active ';
      }

      dividerClassName += (lvl === levels) ? 'none' : 'level-divider';
        
      return (
        <li key = {`lvl-${index}`} className = { itemClassName }>
          <LevelItem level = {index} />
          <div className = {dividerClassName}></div>
        </li>);
    });
    
    return(
      <div>
        <ul className = 'level-list'>
          { levelElements }
        </ul>
      </div>
    );
    
  }
};
