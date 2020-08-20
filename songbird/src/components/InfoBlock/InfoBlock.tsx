import React, { Component } from 'react'
import { quizProps } from '../../config/appConfig';

import './InfoBlock.sass';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Photo from '../Photo/Photo';

export default class Info extends Component<quizProps> {
    render() {
        const { summary, audio, image, answer, link, video, hasAnswered } = this.props;
        const voidLink = '#';
        const filler = '***********';

        return (
            <div className = 'container info-container'>
                <Photo url = { image } type = { 'large' } showContent = { hasAnswered }/>
                <div className = 'question__info'>
                    <div className = 'info__text'>
                        <h2>{ hasAnswered ? answer?.name.common : filler }</h2>
                        <h3>{ hasAnswered ? `${ answer?.name.full }` : filler }</h3>
                        <h3>{ hasAnswered ? `(${ answer?.name.scientific })` : filler }</h3>
                    </div>
                    <AudioPlayer audio = { audio }  showContent = { hasAnswered } />
                    <div className = {`info__buttons ${(hasAnswered)? '': 'none'}`}>
                        <button className = 'button__video'><a href = '#open-modal'>View Video</a></button>
                        <button className = 'button__link'><a href = {(link) ? link: voidLink} target = '_blank' rel = 'noopener noreferrer'>Read More</a></button>
                    </div>
                </div>
                <div className = 'info__summary'>
                    <p className = {(hasAnswered) ? '': 'none'}>{ summary }</p>
                </div>
                <div id='open-modal' className='modal-window'>
                    <div>
                        <video controls title = 'Bird Video' src = { video? video : '' }></video>
                        <a href='#' title='Close' className='modal-close'>X</a>
                    </div>
                </div>
            </div>
        )
    }
}
