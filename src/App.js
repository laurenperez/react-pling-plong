import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Show from './Show'

class App extends Component {
  constructor(){
    super();
    this.state=({
      data: ''
    })
  }
  sendInput = (input) => {
    this.setState({
      data: input
    })
  }

  render() {
    return (
      <div className="App">
        <Form sendInput={this.sendInput}/>
        <Show data={this.state.data}/>
      </div>
    );
  }
}

export default App;
