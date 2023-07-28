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
      <body
        style={{
          backgroundColor: this.state.color,
          transition: ".7s",
          height: "100vh",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23000000' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E")`
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
      </body>
    );
  }
}

export default QuoteBox;
