import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.get();
  }

  get() {
    axios.get("http://localhost:3007/3")
      .then(res => {
        console.log(res)
        const reviews = res.data;
        this.setState({reviews})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
    <div className="app">
      <ReviewList reviews={this.state.reviews}/>
    </div>)
  }
};


ReactDOM.render(<App />, document.getElementById('app'));