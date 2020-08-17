export const appConfig = {
    levels: 6,
    classes: {
        default_container: 'container',
        question_block: 'question-block',
        photo: {
            name: 'photo',
            size: {
                s: 'small',
                l: 'large'
            }
        }
    }
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
