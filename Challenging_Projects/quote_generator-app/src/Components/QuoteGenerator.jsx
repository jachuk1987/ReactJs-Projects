import React, { useState, useEffect } from 'react';
import './QuoteGenerator.css';
import twitter_icon from "../assets/Logo_of_Twitter.png"


const QuoteGenerator = () => {
    const [quote, setQuote] = useState('Loading...');
    const [author, setAuthor] = useState('Loading...');

    const api_url = 'https://api.quotable.io/random';

    const fetchQuote = async () => {
        const response = await fetch(api_url);
        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
    };

    const tweetQuote = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
        window.open(tweetUrl, '_blank', 'width=600,height=300');
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quote-box">
            <h2>Quote of the day</h2>
            <blockquote id="quote">{quote}</blockquote>
            <span id="author">{author}</span>
            <div>
                <button onClick={fetchQuote}>New Quote</button>
                <button onClick={tweetQuote}>
                    <img src={twitter_icon} alt="Tweet" /> Tweet
                </button>
            </div>
        </div>
    );
};

export default QuoteGenerator;
