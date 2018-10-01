import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <Posts/>
    );
  }
}

class Posts extends React.Component {
  render() {
    return (
      <div class="item">
        <h1>Post title</h1>
        <p>This is posts content</p>
      </div>
    );
  }
}

export default App;
