import React, { Component } from 'react';
import './App.css';


class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      formInput: ''
    }
  }
  handleChange = (e) => {
   this.setState({formInput: e.target.value});
  }
  handleClick = (e) => {
    e.preventDefault();
    var input = this.state.formInput;
    this.props.sendInput(input);
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text"  onChange={(e)=>this.handleChange(e)} value={this.state.formInput}/>
          <button type="button" onClick={(e)=>this.handleClick(e)}> Send </button>
        </form>
      </div>
    );
  }
}

export default Form;
