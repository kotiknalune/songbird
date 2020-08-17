import React, { Component } from 'react'
import { appConfig as config, quizProps} from '../../config/appConfig';

import './QuestionBlock.sass'

import Photo from '../Photo/Photo';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

import ContentLoader from '../Loader/ContentLoader';

export default class QuestionBlock extends Component<quizProps> {
    render() {
        const { classes }: typeof config = config;
        const { answer, audio, image, isLoading, hasAnswered} = this.props;

        if (isLoading) return(
            <div className = { `${classes.question_block} ${classes.default_container}`}>
               <ContentLoader />
            </div>
        )

        return (
            <div className = { `${classes.question_block} ${classes.default_container}`}>
                <Photo url = { image } type = { classes.photo.size.s } showContent = { hasAnswered } />
                <div className = 'question-text'>
                    <h2>{ hasAnswered ? answer?.name.common : '***********' }</h2>
                    <h3>{ hasAnswered ? answer?.name.full : '***********'}</h3>
                </div>
                <AudioPlayer audio = { audio } />
            </div>
        )
    }
}
