import CharacterCard from "./CharacterCard";
import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false,
        lose: false
    }
}

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }

    activationHandler = (c) => {
        let guess = [this.state.guess]+c
        if(this.state.attempt <= 3){
            this.setState({guess})
            if(guess.length === this.state.chars.length){
                if(guess === this.state.word){
                    this.setState({guess: [], completed: true})
                }else{
                    this.setState({guess: [], attempt: this.state.attempt + 1})
                    if(this.state.attempt == 3){
                        this.setState({lose: true})
                    }
                }
            }
        }
    }

    restartGame(){
        window.location.reload()
    }

    render(){   
        let className = `card ${this.state.lose ? '' : 'invisible'}`      
        return(
            <div className="App">
                {
                    Array.from(this.state.chars).map(
                        (c, i) => <CharacterCard value = {c} key = {i} attempt={this.state.attempt}
                        activationHandler = {this.activationHandler}/>
                    )
                }
                <p>Your attempt left:{4 - this.state.attempt}</p>
                <p>{this.state.completed ? "You Win!" : ""}</p>
                <p>{this.state.lose ? "You lose!" : ""}</p>
                <button className={className} type="submit"  onClick={this.restartGame}>Restart Game</button>
            </div>
        )
    }
}