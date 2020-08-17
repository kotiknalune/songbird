import React, { Component } from 'react'
import './Button.sass'

interface buttonProps {
    hasAnswered: boolean,
    loadNextLevel: any
}
export default class Button extends Component<buttonProps> {

    render() {
        const { hasAnswered, loadNextLevel } = this.props;
        const buttonClass = hasAnswered ? 'next-level' : 'disabled';
        
        return (
            <button className = { buttonClass } disabled = { !hasAnswered } onClick = { loadNextLevel }>Next Level</button>
        )
    }
}
