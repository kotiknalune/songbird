import React from 'react';
import './Score.sass';

let currentScore = 0;

const Score = () => {
    return <h2 className = 'score-text'>Score:{currentScore}</h2>;
};

export default Score;