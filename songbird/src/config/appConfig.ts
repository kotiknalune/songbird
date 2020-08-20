import QUIZ_DATA from '../context/quizData.json'

const INIT = 1;

export const appConfig = {
    levels: QUIZ_DATA.length,
    initLevel: INIT,
    maxScore: QUIZ_DATA.length * (QUIZ_DATA[INIT].birds.length - INIT),
    levelScore: QUIZ_DATA[INIT].birds.length - INIT
}

export const quizResults = [
    {
        id: 1,
        title: 'Guru of Ornithology',
        range: {
            max: appConfig.maxScore,
            min: appConfig.maxScore
        },
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et orci massa. Sed vel sollicitudin nibh, 
        at vestibulum erat. Vestibulum auctor auctor mauris euismod tempus. Donec et bibendum leo. Maecenas id est neque. 
        Donec eget augue sit amet est imperdiet posuere sit amet non orci`
    },
    {
        id: 2,
        title: 'Avian Master',
        range: {
            max: 29,
            min: 21
        },
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et orci massa. Sed vel sollicitudin nibh, 
        at vestibulum erat. Vestibulum auctor auctor mauris euismod tempus. Donec et bibendum leo. Maecenas id est neque. 
        Donec eget augue sit amet est imperdiet posuere sit amet non orci`
    },
    {
        id: 3,
        title: 'Avid Birdwatcher',
        range: {
            max: 20,
            min: 14
        },
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et orci massa. Sed vel sollicitudin nibh, 
        at vestibulum erat. Vestibulum auctor auctor mauris euismod tempus. Donec et bibendum leo. Maecenas id est neque. 
        Donec eget augue sit amet est imperdiet posuere sit amet non orci`
    },
    {
        id: 4,
        title: 'Beginner Birder',
        range: {
            max: 13,
            min: 7
        },
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et orci massa. Sed vel sollicitudin nibh, 
        at vestibulum erat. Vestibulum auctor auctor mauris euismod tempus. Donec et bibendum leo. Maecenas id est neque. 
        Donec eget augue sit amet est imperdiet posuere sit amet non orci`
    },
    {
        id: 5,
        title: 'Hopeless Citizen',
        range: {
            max: 6,
            min: 0
        },
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et orci massa. Sed vel sollicitudin nibh, 
        at vestibulum erat. Vestibulum auctor auctor mauris euismod tempus. Donec et bibendum leo. Maecenas id est neque. 
        Donec eget augue sit amet est imperdiet posuere sit amet non orci`
    }
]

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
