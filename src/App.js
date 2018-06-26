import React, { Component } from 'react';
import socket from './socket/api';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){

    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
