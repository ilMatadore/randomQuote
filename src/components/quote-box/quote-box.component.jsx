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
            author: '',
            color: ''
        }
    }

    componentDidMount() {
        this.newQuote()
    }

    random_rgba = () => {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    }

    newQuote = () => {
        fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then(response => response.json()).then(quote => this.setState({ quote: quote.en, author: quote.author }));
        this.setState({color: this.random_rgba()});
        
    }
    render() {
        return(
            <body style={{backgroundColor: this.state.color, transition: ".7s"}}>
            <div id="quote-box">
                <QuoteText quote={this.state.quote} color={this.state.color}/>
                <QuoteAuthor author={this.state.author} color={this.state.color}/>
                <div id="buttons">
                    <Button id="new-quote" text="New Quote" onClick={this.newQuote} color={this.state.color}/>
                    <Tweet id="tweet-quote" text="Tweet" quote={this.state.quote} author={this.state.author} color={this.state.color}/>
                </div>
            </div>
            </body>
        )
    }
}

export default QuoteBox;