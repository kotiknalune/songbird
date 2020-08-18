import QUIZ_DATA from '../context/quizData.json'

const INIT = 1;

export const appConfig = {
    levels: QUIZ_DATA.length,
    initLevel: INIT,
    maxScore: QUIZ_DATA.length * (QUIZ_DATA[INIT].birds.length - INIT),
    levelScore: QUIZ_DATA[INIT].birds.length - INIT
}

export interface itemNamesProps  {
    common: string,
    full: string,
    scientific: string
}

export interface quizItemProps {
    id: number,
    name: itemNamesProps
}

export interface quizProps {
    isLoading: boolean,
    hasAnswered: boolean,
    answer: quizItemProps,
    summary?: string | null,
    link?: string | undefined,
    image: string | null,
    audio: string,
    video?: string | null
}
