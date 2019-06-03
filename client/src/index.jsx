import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';
import CommentBox from './components/CommentBox.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    axios.get("http://localhost:3007/50")
      .then(res => {
        console.log(res)
        const reviews = res.data;
        this.setState({reviews})
      })
      .catch(err => {
        console.log(err);
      })
  }

  submit(data) {
    console.log('posted');
    axios.post("http://localhost:3007", data)
      .then(res => {
        console.log(res);
        const reviews = req.body;
        reviews.sort((a, b) => {
          return b.helpfulComment - a.helpfulComment;
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
    <div className="app">
      <CommentBox submitReview={this.submit}/>
      <ReviewList reviews={this.state.reviews}/>
    </div>)
  }
};


ReactDOM.render(<App />, document.getElementById('app'));