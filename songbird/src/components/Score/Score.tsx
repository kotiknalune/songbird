import React, { Component } from 'react';
import './Score.sass';
import { appConfig } from '../../config/appConfig';

interface scoreProps {
    score: number
}
export default class Score extends Component<scoreProps> {
    render() {
        return (
        <h2 className = 'score-text'>Score: { this.props.score }/{ appConfig.maxScore }</h2>
        )
    }
};

