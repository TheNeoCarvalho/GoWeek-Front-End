import React, { Component } from 'react';

import './Login.css'
import twitterLogo from '../twitter.svg'

export default class Login extends Component {

    state = {
        usename: ""
    }

    handleSubmit = e => {
        e.preventDefault()
    
        const { username } = this.state
        if(!username.length) return
        localStorage.setItem('@goweek:username', username)
        this.props.history.push('/timeline')
      }
    
      handleInputChange = e => {
        this.setState({ username: e.target.value })
      }

    render() {
    return (
        <div className="login-wrapper">
            <img src={twitterLogo} />
            <form onSubmit={ this.handleSubmit }>
                <input
                onChange={ this.handleInputChange }
                value={ this.state.username }
                placeholder="@usuario"
                />
                <button>Entrar</button>
            </form>
        </div>
    )
  }
}
