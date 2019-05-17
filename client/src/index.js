import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
ReactDOM.render(<App />, document.getElementById('app'));

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

  render() {
    return (
    <div className="App">
      <h1>User Reviews</h1>
    </div>)
  }
};

export default App;