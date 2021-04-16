import React, { Component } from 'react';
import './App.css';
import App from './App';

class Show extends Component {
  constructor(props){
    super(props);
    this.state=({
      data: props.data
    })
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({data:nextProps.data})
  }

  render() {
    var input = this.state.data;
    var output;
    if (input % 3 === 0) {
      output = "pling";
    } else if (input % 5 === 0) {
      output = "plang";
    } else if (input % 7 === 0) {
      output = "plong";
    } else {
      output = input;
    };

    return (
      <div className="App">
        <p>Output:</p>
        <p>{output}</p>
      </div>
    );
  }
}

export default Show;



//// OR WRITE THIS AS A FUNCTIONAL COMPONENT ONLY ////

// const Show = (props) => {
//   render() {
//     var input = this.state.data;
//     var output;
//     if (input % 3 === 0) {
//       output = "pling";
//     } else if (input % 5 === 0) {
//       output = "plang";
//     } else if (input % 7 === 0) {
//       output = "plong";
//     } else {
//       output = input;
//     };
//
//     return (
//       <div className="App">
//         <p>Output:</p>
//         <p>{output}</p>
//       </div>
//     );
//   }
// }
//
// export default Show;
