import React, { Component } from 'react';
import socket from './socket/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: 'Default',
    }
  }
  componentDidMount() {
    socket.on('news', (data) => {
      console.log('<<< client: ', data.message);
      // news = data.message
      this.newsUpdate(data);
      // socket.emit('my other event', { my: 'data' });
    })
  }

  // componentWillUnmount() {

  // }

  newsUpdate = data => {
    this.setState({ news: data.message })
    console.log('<<< client: newsUpdate data ', data)
  }


  render() {
    console.log("<<< client: render() this.state.news ", this.state.news)
    return (
      <div className="App">
        <h1>{this.state.news}</h1>
      </div>
    );
  }
}

export default App;
