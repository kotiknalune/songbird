import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import { quizProps } from '../../config/appConfig';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Photo from '../Photo/Photo';

import './InfoBlock.sass';

export default class Info extends Component<quizProps> {
    state = {
        modalVisible: false
    }

    toggleModal = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render() {
        const { summary, audio, image, answer, link, video, hasAnswered, showInfo} = this.props;
        const voidLink = '#';
        const filler = '***********';

        const show = hasAnswered || showInfo;

        return (
            <div className = 'container info-container'>
                <Photo url = { image } type = { 'large' } showContent = { show } />
                <div className = 'question__info'>
                    <div className = 'info__text'>
                        <h2>{ show ? answer?.name.common : filler }</h2>
                        <h3>{ show? `${ answer?.name.full }` : filler }</h3>
                        <h3>{ show ? `(${ answer?.name.scientific })` : filler }</h3>
                    </div>
                    <AudioPlayer audio = { audio } showContent = { show } />
                    <div className = {`info__buttons ${(show)? '': 'none'}`}>
                        <button className = 'button__video' onClick = { this.toggleModal }>View Video</button>
                        <button className = 'button__link'><a href = {(link) ? link: voidLink} target = '_blank' rel = 'noopener noreferrer'>Read More</a></button>
                    </div>
                </div>
                <div className = 'info__summary'>
                    <p className = {(show) ? '': 'none'}>{ summary }</p>
                </div>
                <div id='open-modal' className = { `modal-window ${(this.state.modalVisible ? 'visible' : '')}` } onClick = { this.toggleModal }>
                    <div className = 'modal-window__video'>
                        <ReactPlayer  
                            url = { video? video : '' } 
                            controls = { true }
                            playing={ this.state.modalVisible }
                            width = { 600 }
                            height = { 400 }
                        />
                    </div>
                </div>
            </div>
        )
    }
}
