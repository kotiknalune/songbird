import React, { Component } from 'react';
import './Score.sass';

interface scoreProps {
    score: number
}
export default class Score extends Component<scoreProps> {
    render() {
        return (
        <h2 className = 'score-text'>Score: { this.props.score }/30</h2>
        )
    }
};

