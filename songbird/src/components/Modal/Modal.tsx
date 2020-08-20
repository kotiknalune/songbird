import React from 'react';
import './Modal.sass';

interface modalInterface { show: boolean, onClose: any };
export default class Modal extends React.Component<modalInterface, {}> {
    state = {
        show: true
    }

    hideModal = () => {
        this.setState({ show: !this.state.show });
        this.props.onClose()
    }

    render() {
        if (!this.props.show) return null
        return (
            <div className = 'start-game'>
                <img src = '/default_bird.png' alt = 'Bird'></img>
                <h1 className = 'start-game__title'>Songbird</h1>
                <button className = 'start-game__play-button' onClick = { this.hideModal }>Play</button>
            </div>
        )
    }
}