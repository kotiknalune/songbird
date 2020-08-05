import React, { Component } from 'react'
import { appConfig as config, quizProps} from '../../config/appConfig';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Photo from '../Photo/Photo';

export default class Info extends Component<quizProps> {
    render() {
        const { summary, audio, image, answer } = this.props;
        const { classes } = config;

        return (
            <div className = { classes.default_container }>
                <p>{ answer?.name } { answer?.full_name }</p>
                <Photo url = { image } alt = { answer?.full_name }/>
                <p>{ summary }</p>
                <AudioPlayer audio = { audio } />
            </div>
        )
    }
}
