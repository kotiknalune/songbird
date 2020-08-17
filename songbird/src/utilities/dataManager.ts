import QUIZ_INFO from '../context/quizData.json';
import { getRandomNumber } from './utils';

export const pickRandomCorrectAnswer = (level : number) => {
    const index = level - 1; 
    const correctAnswer = getRandomNumber(0, QUIZ_INFO[index].birds.length )
    return QUIZ_INFO[index].birds[correctAnswer];
}