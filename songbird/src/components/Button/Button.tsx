import React, { Component } from 'react'
import './Button.sass'
import { appConfig } from '../../config/appConfig';

interface buttonProps {
    hasAnswered: boolean,
    currentLevel: number,
    loadNextLevel: any
}
export default class Button extends Component<buttonProps> {

    render() {
        const { hasAnswered, loadNextLevel, currentLevel } = this.props;
        const buttonClass = hasAnswered ? 'next-level' : 'disabled';

        const buttonText = (currentLevel === appConfig.levels) ? 'Finish quiz' : 'Next Level';
        
        return (
            <button 
                className = { buttonClass } 
                disabled = { !hasAnswered } 
                onClick = { loadNextLevel }
            >
                { buttonText }
            </button>
        )
    }
}
