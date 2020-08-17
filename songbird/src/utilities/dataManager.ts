import QUIZ_INFO from '../context/quizData.json';
import { getRandomNumber } from './utils';

export const pickRandomCorrectAnswer = (level : number) => {
    const correctAnswer = getRandomNumber(0, QUIZ_INFO[level].birds.length )
    return QUIZ_INFO[level].birds[correctAnswer];
}