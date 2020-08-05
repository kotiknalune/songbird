import React, { Component } from 'react'
import { appConfig as config, quizProps} from '../../config/appConfig';

import Photo from '../Photo/Photo';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

export default class QuestionBlock extends Component<quizProps> {
    render() {
        const { classes }: typeof config = config;
        const { answer, audio, image } = this.props;

        return (
            <div className = {classes.default_container}>
                <Photo url = { image } alt = { answer?.full_name } />
                <div>
                    <h2>{ answer?.name }</h2>
                    <h3>{ answer?.full_name }</h3>
                </div>
                <AudioPlayer audio = { audio } />
            </div>
        )
    }
}
