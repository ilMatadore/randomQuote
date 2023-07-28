import React from "react";

import "./quote-box.styles.css";

import QuoteText from "../quote-text/quote-text.component";
import QuoteAuthor from "../quote-author/quote-author.component";
import Button from "../Button/button.component";
import Tweet from "../tweet/tweet.component";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: "",
      author: "",
      color: "",
      loading: false,
    };
  }
  
  componentDidMount() {
    this.newQuote();
  }

  random_rgba = () => {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
  };

  newQuote = () => {
    try {
      this.setState({loading: true})
      fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json")
      .then((response) => response.json())
      .then((quotes) =>
      {
        
        this.setState({ quotes: quotes});
        this.getRandomQuote()
        this.setState({loading: false})
      }
      ).catch(err => console.log(err));
    } catch (er) {
      console.log(er)
    }
  }

  getRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * 8262)
    let randomQuote = this.state.quotes[randomNumber]
    return this.setState((...prev) => ({...prev, quote: randomQuote.text, author: randomQuote.author, color: this.random_rgba() }));
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color,
          transition: ".7s",
          height: "100vh",
        }}
      >
        <div id="quote-box">
            <QuoteText quote={this.state.quote} color={this.state.color} loading={this.state.loading}/>
            <QuoteAuthor author={this.state.author} color={this.state.color} />
          <div id="buttons">
            <Button
              id="new-quote"
              text="New Quote"
              onClick={this.getRandomQuote}
              color={this.state.color}
              />
            <Tweet
              id="tweet-quote"
              text="Tweet"
              quote={this.state.quote}
              author={this.state.author}
              color={this.state.color}
              />
          </div>
          </div>
      </div>
    );
  }
}

export default QuoteBox;
