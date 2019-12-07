import React from 'react';

import './tweet.styles.css';

const Tweet = (props) => {
    return (
        <a id={props.id}
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/intent/tweet"><i className="fab fa-twitter-square"></i></a>
    )
}

export default Tweet;