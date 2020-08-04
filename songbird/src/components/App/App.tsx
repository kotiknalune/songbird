import React from 'react';
import { appConfig as config } from '../../config/appConfig';

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

  return (
    <div className = 'app'>
      <Header />
      <Levels levels = {config.levels} />
      <Main />
    </div>
  );
}

export default App;
