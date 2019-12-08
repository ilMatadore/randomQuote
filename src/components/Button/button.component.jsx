import React from 'react';

import './newQuote.styles.css';

const Button = (props) => {
    return (
        <button id={props.id} onClick={props.onClick} style={{backgroundColor: props.color, transition: ".7s"}}>{props.text}</button>
    )
}

export default Button;