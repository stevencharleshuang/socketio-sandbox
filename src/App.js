import React, { Component } from 'react';
import socket from './socket/api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: 'Offline',
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
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

  handleChange(e) {
    console.log('handleChange: ', e.target.value)
    this.setState({
      input: e.target.value,
    })
  }

  handleSend(e) {
    console.log('handleSend: ', this.state.input)
  }

  render() {
    console.log('this.state.input: ', this.state.input)
    console.log("<<< client: render() this.state.news ", this.state.news)
    return (
      <div className="App">
        <h1>WELCOME TO THE SOCKET DOME</h1>
        <h2>Socket Server Status: {this.state.news}</h2>
        <form>
          <label>Server Comm:</label><br />
          <input onChange={this.handleChange} name="message" type="text" placeholder="Message" autoFocus autoComplete="off" />
        </form>
        <button onClick={this.handleSend}>Send</button>
      </div>
    );
  }
}

export default App;
