import React, { Component } from 'react'
import './Photo.sass'

interface photoProps {
    url : string,
    alt: string
}

export default class Photo extends Component<photoProps> {
    render() {
        const { url, alt } = this.props;
        return (
            <img 
                className = 'photo' 
                alt = { alt } 
                src = { url } />    
        )
    }
}
