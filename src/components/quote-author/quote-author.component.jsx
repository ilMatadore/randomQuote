import React from 'react';

import './quote-author.styles.css';

const QuoteAuthor = (props) => {
    return (
        <div id="author">
            <p>- {props.author}</p>
        </div>
    )
}

export default QuoteAuthor;