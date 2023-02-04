import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [
        {
          text: "The journey of a thousand miles begins with one step.",
          author: "Lao Tzu"
        },
        {
          text: "That which does not kill us makes us stronger.",
          author: "Friedrich Nietzsche"
        },
        {
          text: "Life is what happens when you’re busy making other plans.",
          author: "John Lennon"
        },
        {
          text: "When the going gets tough, the tough get going.",
          author: "Joe Kennedy"
        },
        {
          text: "You must be the change you wish to see in the world.",
          author: "Mahatma Gandhi"
        }
      ],
      quote: {
        text: "",
        author: ""
      }
    };
    this.randomize = this.randomize.bind(this);
  }
  randomize() {
    this.setState(() => {
      const random = Math.floor(Math.random() * 5);
      return {
        quote: this.state.quoteList[random]
      };
    });
  }
  render() {
    let quote = this.state.quote;
    if (!quote.text) {
      quote = this.state.quoteList[Math.floor(Math.random() * 5)];
    }
    const twitterQuoteUrl =
      "'" +
      encodeURIComponent(quote.text) +
      "' " +
      encodeURIComponent(quote.author);
    return (
      <div className="App" id="quote-box">
        <div id="quote">
          <h1 id="quote-text">{quote.text}</h1>
          <p id="quote-author">
            <i>{quote.author}</i>
          </p>
        </div>
        <div className="actions">
          <div className="social-media">
            <a
              id="twitter-quote"
              href={"https://twitter.com/intent/tweet?text=" + twitterQuoteUrl}
              rel="noreferrer"
              target="_blank"
            >
              <button className="tweet-btn">Twitter</button>
            </a>
          </div>
          <div className="generator">
            <button id="new-quote" onClick={this.randomize}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
