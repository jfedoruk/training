var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('font-awesome/css/font-awesome.css');
require('./styles/style.css');

var divStyle = {
  //margin: "20px"
  padding: "5%"
};

var jumbotronStyle = {
  background: "#428bca",
  fontFamily: "Monospace",
  color: "white"
};

var buttonStyle = {
  color: "black",
  background: "#428bca"
};

function QuoteForm(props) {
    return (
      <div className="jumbotron col-xs-6 col-xs-offset-3 text-center text-info" style={jumbotronStyle}>
        <ReactCSSTransitionGroup
           transitionName="quote"
           transitionAppear={true}
           transitionAppearTimeout={700}
           transitionEnter={true}
           transitionLeave={true}
           transitionEnterTimeout={500}
           transitionLeaveTimeout={300}>
          <div className="row">
             <p>
              {props.quote}
              </p>
          </div>
          <div className="row col-xs-offset-9">
            <em>- {props.author}</em>
          </div>
        </ReactCSSTransitionGroup>
        <div className="row"><p></p></div>
        <div className="row">
              <div className="row col-xs-3">
                <a
                  className="btn"
                  style={buttonStyle}
                  id="tweet-quote"
                  title="Tweet this quote!"
                  target="_blank"
                  onClick={props.tweetQuote}>
                  <i className="fa fa-twitter-square fa-3x"></i>
                </a>
              </div>
              <div className="row col-xs-offset-9">
                <button
                  className="btn btn-default btn-success"
                  type="submit"
                  target="_blank"
                  onClick={props.getQuote}>
                  Next
                </button>
              </div>
        </div>
      </div>
    )
};

var Quote = React.createClass({
  getInitialState: function () {
    return {
      quote: "Women might be able to fake orgasms. But men can fake a whole relationship.",
      author: "Sharon Stone"
    }
  },
  tweetQuote: function(e) {
    e.preventDefault();
    var url = "https://twitter.com/intent/tweet?text="
              + "\"" + this.state.quote + "\""
              + "%20by%20"
              + this.state.author;
    window.open(url);
    // Linking.canOpenURL(url).then(supported => {
    //   if (!supported) {
    //     console.log('Can\'t handle url: ' + url);
    //   } else {
    //     return Linking.openURL(url);
    //   }
    // }).catch(err => console.error('An error occurred', err));

  },
  getQuote: function(e) {
    e.preventDefault();
    var quoteLocal = this.state.quote;
    var authorLocal = this.state.author;

    this.setState({
      quote: "",
      author: ""
    });

    console.log("current quote:" + quoteLocal + "\nand author: " + authorLocal);

    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Mashape-Key': 'gdbxQsdwIsmshzAvWbzD0WAREucNp1IczwCjsnfxH96SrBXBmd',
      }
    }).then(function(response) {
        if(response.status == 200) return response.json();
        else throw new Error('Something went wrong on api server!');
    })
    .then(response => {
      console.log(response);
      this.setState({
        quote: response.quote,
        author: response.author
      });
    })
    .catch(function(error) {
      console.error(error);
      return;
    });
  },
  render: function () {
    return (
      <QuoteForm key={this.state.quote} quote={this.state.quote} author={this.state.author} getQuote={this.getQuote} tweetQuote={this.tweetQuote}/>
    )
  }
});

var Main = React.createClass({
  render: function () {
    return (
      <div className="container-fluid bg-info" style={divStyle}>
        <Quote/>
      </div>
    )
  }
});



ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
