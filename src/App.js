import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from './BeerList';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

let counter = 11;

let COMMON_JSON_HEADERS =  {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    'Access-Control-Allow-Origin': '*',
  },
  credentials: "same-origin",
};

class App extends Component {
  constructor(props){
    super(props)
    this.state = {inputValue: ""};

    this.textInput = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
 
  onClickHandler(e) {
        fetch(`http://localhost:8080/add-beer`, {
        method: "POST",
        ...COMMON_JSON_HEADERS,
        body: JSON.stringify({name: this.state.inputValue})
      })
      .then(response => console.log(response))
      .catch(e => console.log(e))
  }

  onChangeHandler() {
    this.state.inputValue = this.textInput.current.value;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <input type="text" ref={this.textInput} onChange={this.onChangeHandler}/>
            <button
              style={{margin: '10px'}}
              onClick={this.onClickHandler}
            >
              ADD
            </button>
          <BeerList/>
        </header>
      </div>
    );
  }
}

export default (App);
