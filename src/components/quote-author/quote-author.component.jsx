import React from 'react';

import './quote-author.styles.css';

const QuoteAuthor = (props) => {
    return (
        <div id="author" style={{color: props.color, transition: "1s"}}>
            <p>- {props.author}</p>
        </div>
    )
}

export default QuoteAuthor;