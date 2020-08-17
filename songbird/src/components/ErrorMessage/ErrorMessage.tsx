import React, { Component } from 'react'
import './ErrorMessage.sass'

interface errorProps {
    hasError: boolean,
    errorType: any
}

function refreshPage() {
    window.location.reload(false);
  }

export class ErrorMessage extends Component<errorProps> {
    render() {
        if (!this.props.hasError) return null;
        return (
            <div className = 'error-message'>
                <div className = 'error-message__content'>
                    <h1>Ups! Something went wrong...</h1>
                    <h2>Error: {this.props.errorType.message}</h2>
                    <h2>If the error persists, contact me at <a href="https://github.com/kotiknalune">Github</a></h2>
                    <button onClick={refreshPage} >Refresh</button>
                </div>
            </div>
        )
    }
}
