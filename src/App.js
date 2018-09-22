import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

let words = ["hello", "world", "digital", "dinosaur", "faith", "original", "water", "drink", "music", "spider"]
let word = words[Math.floor(Math.random()*words.length)]
class App extends Component {
  render() {
    return (
      <div>
        {
          <WordCard value={word}/>
        }
      </div>
    );
  }
}

export default App;
