import React from 'react';
import './Levels.sass';

type levelItemType = {
  level: number,
  selected?: boolean
}

// const isActive: boolean = false;

const LevelItem = ({level, selected = false } : levelItemType) => {
  const levelStyle = { color: selected ? 'red' : 'white' };
  return (<span style = { levelStyle }>{ level + 1 }</span>);
}

const Levels = ({levels} : {levels: number}) => {
  const levelElements = [...Array(levels).keys()].map((i) => {
    const divider : string = (i  + 1) === levels ? 'none' : 'level-divider';
    
    return (
    <li key = {`lvl-${i}`} className = 'level-list__item'>
      <LevelItem level = {i} />
      <div className = {divider}></div>
    </li>);
  });

  // levelElements[0].props.className = 'level-list__item selected';

  return (
    <div>
      <ul className = 'level-list'>
        { levelElements }
      </ul>
    </div>
  );
};

  export default Levels;