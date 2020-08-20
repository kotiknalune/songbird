import React, { Component } from 'react'
import './Photo.sass'

import defaultPhoto from './default_bird.png'

interface photoProps {
    showContent?: boolean
    url : string | null,
    type: string
}

export default class Photo extends Component<photoProps> {
    render() {
        const { url, type, showContent } = this.props;
        return (
            <div 
                className = {`photo ${type}`}
                style = { showContent ? { backgroundImage: `url(${url})`} : { backgroundImage: `url(${defaultPhoto})`}}
            ></div>  
        )
    }
}
 