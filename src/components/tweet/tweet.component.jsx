import React from 'react';

import './tweet.styles.css';

const Tweet = (props) => {
    const toTweet = props.quote.replace(/ /g, "%20");
    const toAuthor = props.author.replace(/ /g, "%20");
    const url = "https://twitter.com/intent/tweet?hashtags=quotes&text="
    const tweet = url + toTweet + toAuthor;

    return (
        <a id={props.id}
        target="_blank"
        rel="noopener noreferrer"
        href={tweet}><i className="fab fa-twitter-square"
        style={{color: props.color, transition: ".7s"}}></i></a>
        
    )
}

export default Tweet;