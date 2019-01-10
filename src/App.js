import React, { Component } from 'react';
import Header from  './components/Header';
import Board from './components/Board';
import constructorLetter from './utils/constructorLetter'
import 'font-awesome/css/font-awesome.css';
import './App.css'

const getStateInit = ()=>{
  const letter = constructorLetter();
  return {
    letter
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = getStateInit();
  }

  render() {
    return (
      <div>
        <Header />
        <Board 
          letter = {this.state.letter}
        />
      </div>
    );
  }
}

export default App;
