import React from 'react';

import './quote-box.styles.css';

import QuoteText from '../quote-text/quote-text.component';
import QuoteAuthor from '../quote-author/quote-author.component';
import Button from '../Button/button.component';
import Tweet from '../tweet/tweet.component';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: '',
            author: ''
        }
    }

    componentDidMount() {
        this.newQuote()
    }

    newQuote = () => {
        fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then(response => response.json()).then(quote => this.setState({ quote: quote.en, author: quote.author}))
        
    }
    render() {
        return(
            <div id="quote-box">
                <QuoteText quote={this.state.quote}/>
                <QuoteAuthor author={this.state.author}/>
                <div id="buttons">
                    <Button id="new-quote" text="New Quote" onClick={this.newQuote}/>
                    <Tweet id="tweet-quote" text="Tweet" />
                </div>
            </div>
        )
    }
}

export default QuoteBox;