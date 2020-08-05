export const appConfig = {
    levels: 6,
    classes: {
        default_container: 'container'
    },
}

export interface quizProps {
    answer: {
        name: string
        full_name: string
    },
    summary?: string | null,
    link?: string | null,
    image: string,
    audio: string,
    video?: string | null
}
