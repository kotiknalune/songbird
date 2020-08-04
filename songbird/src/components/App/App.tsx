import React from 'react';

import Levels from '../Levels/Levels';
import Score from '../Score/Score';

import './App.sass';

const Header = () => {
  return ( 
    <div className = 'header'>
      <h1>Tweety</h1>
      <Score />
    </div>
  )
};

const Main = () => {
  return(
    <div className = 'main'>
    </div>
  )
};

function App() {
// const isShown = false;
// const date = <span> { new Date().toDateString() } </span>;
// const empty = <span>Not showing date</span>;
 // App > { isShown ? date : empty }

  const gameLevels: number = 6;

  return (
    <div className = 'app'>
      <Header />
      <Levels levels = {gameLevels} />
      <Main />
    </div>
  );
}

export default App;
