import React from 'react';
// import './App.css';

const Levels = () => {
  return (
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
  );
};

const Score = () => {
  return <h2>Score: 0</h2>
}

const Header = () => {
  return ( 
  <div>
    <h1>Tweety</h1>
    <Score />
    <Levels />
  </div>
)};

function App() {
  return (
    <Header />
  );
}

export default App;
