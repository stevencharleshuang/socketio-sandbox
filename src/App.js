import React, { Component } from 'react';
import socket from './socket/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: 'Offline',
    }
  }
  componentDidMount() {
    socket.on('news', (data) => {
      this.newsUpdate(data);
      // socket.emit('my other event', { my: 'data' });
    })
  }

  // componentWillUnmount() {

  // }

  newsUpdate = data => {
    this.setState({ news: data.status })
    console.log('<<< client: newsUpdate data ', data)
  }


  render() {
    console.log("<<< client: render() this.state.news ", this.state.news)
    return (
      <div className="App">
        <h1>WELCOME TO THE SOCKET DOME</h1>
        <h2>Socket Server Status: {this.state.news}</h2>
      </div>
    );
  }
}

export default App;
