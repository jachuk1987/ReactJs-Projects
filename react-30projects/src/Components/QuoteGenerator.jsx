import React, { Component } from 'react';
import "../App.css";
import twitter_icon from "../assets/Logo_of_Twitter.png";

export default class QuoteGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'Loading...',
            author: 'Loading...'
        };
    }

    api_url = 'https://api.quotable.io/random';

    fetchQuote = async () => {
        try {
            const response = await fetch(this.api_url);
            const data = await response.json();
            this.setState({
                quote: data.content,
                author: data.author
            });
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    };

    tweetQuote = () => {
        const { quote, author } = this.state;
        const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
        window.open(tweetUrl, '_blank', 'width=600,height=300');
    };

    componentDidMount() {
        this.fetchQuote();
    }

    render() {
        const { quote, author } = this.state;

        return (
            <div className="quote-box">
                <h2>Quote of the day</h2>
                <blockquote id="quote">{quote}</blockquote>
                <span id="author">{author}</span>
                <div>
                    <button onClick={this.fetchQuote}>New Quote</button>
                    <button onClick={this.tweetQuote}>
                        <img src={twitter_icon} alt="Tweet" /> Tweet
                    </button>
                </div>
            </div>
        );
    }
};
