import React, { Component } from 'react'
import { quizProps } from '../../config/appConfig';

import './QuestionBlock.sass'

import Photo from '../Photo/Photo';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

import ContentLoader from '../Loader/ContentLoader';

export default class QuestionBlock extends Component<quizProps> {
    render() {
        const { answer, audio, image, isLoading, hasAnswered} = this.props;

        if (isLoading) return(
            <div className = { 'question-block container'}>
               <ContentLoader />
            </div>
        )

        return (
            <div className = { 'question-block container' }>
                <Photo url = { image } type = { 'small' } showContent = { hasAnswered } />
                <div className = 'question-text'>
                    <h2>{ hasAnswered ? answer?.name.common : '***********' }</h2>
                    <h3>{ hasAnswered ? answer?.name.full : '***********'}</h3>
                </div>
                <AudioPlayer audio = { audio } showContent = { true } />
            </div>
        )
    }
}
