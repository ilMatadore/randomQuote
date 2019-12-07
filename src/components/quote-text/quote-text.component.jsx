import React from 'react';

import './quote-text.styles.css';

const QuoteText = props => {
    return (
        <div id="text">
            "{props.quote}"
        </div>
    )
}

export default QuoteText;