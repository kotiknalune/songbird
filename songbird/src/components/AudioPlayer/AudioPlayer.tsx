import React, { Component } from 'react'
import './AudioPlayer.sass'

interface audioProps {
    audio: string
}
export default class AudioPlayer extends Component<audioProps> {

    render() {
        const { audio } = this.props;
        return (
        <audio controls>
            <source src = { audio } type="audio/mpeg"></source>
        </audio> 
        )
    }
}
