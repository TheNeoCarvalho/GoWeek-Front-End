import React, { Component } from 'react';
import api from '../services/api'
import Tweet from '../components/Tweet'

import twitterLogo from '../twitter.svg'
import './Timeline.css';

export default class Timeline extends Component {

    state = {
        tweets: [],
        newTwitter: ''
    }
    
    async componentDidMount() {
        const response = await api.get('tweets')
        this.setState({ tweets: response.data })
    }

    handleInputChange = e => {
        this.setState({ newTwitter: e.target.value })
    }

    handleNewTweet = async e => {
        if(e.keyCode !== 13) return
        
        const content = this.state.newTwitter
        const author = localStorage.getItem('@goweek:username')
        
        await api.post('tweets', {content, author })

        this.setState({ newTwitter: ''})
    }

  render() {
    return (
        <div className="timeline-wrapper">
        <img src={twitterLogo} />       
        <form>
            <textarea
                value={ this.state.newTwitter }
                onChange={ this.handleInputChange }
                onKeyDown={ this.handleNewTweet }
                placeholder="O que está acontecendo?"
            />
        </form>
        <ul>
            { this.state.tweets.map(tweet => (
               <Tweet key={ tweet._id } tweet={ tweet } />
            ))}
        </ul>        
        </div>
    )
  }
}
