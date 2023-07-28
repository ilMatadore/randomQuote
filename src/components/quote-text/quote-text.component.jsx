import React from 'react';

import './quote-text.styles.css';

const QuoteText = props => {
    return (
        <div id="text" style={{color: props.color, transition: ".7s"}}>
            {props.loading ? <p>...Loading</p> : `"${props.quote}"`}
        </div>
    )
}

export default QuoteText;