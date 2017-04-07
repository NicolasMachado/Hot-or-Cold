import React from 'react';
import './App.css';

import Header from './components/header';
import GameContainer from './components/game-container';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	numberToGuess: Math.round(Math.random()*100),
            lastGuess: null,
            guessHistory: [],
            numberAttempts: 0,
            message: 'Make your guess!',
            won: false
        };

        this.onGuessSubmit = this.onGuessSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    isValid(number, component) {
        if (component.state.won) {
            component.setState({message: 'Please start a new game'});
            return false
        }

        if (!number) {
            return false 
        }

        if (number < 0 || number > 100) {
            component.setState({message: 'The number must be comprised between 0 and 100!'});
            return false
        }

        if (component.state.guessHistory.indexOf(number) > -1) {
            component.setState({message: 'You have already guessed this number!'});
            return false
        }

        return true
    }

    HotOrCold(number, component) {
        const toGuess = component.state.numberToGuess;
        if (number > toGuess + 50 || number < toGuess - 50) {
            return component.setState({message: 'Freezing cold'});
        } else if (number > toGuess + 35 || number < toGuess - 35) {
            return component.setState({message: 'Cold'});
        } else if (number > toGuess + 20 || number < toGuess - 20) {
            return component.setState({message: 'Kinda warm'});
        } else if (number > toGuess + 10 || number < toGuess - 10) {
            return component.setState({message: 'Warm'});
        } else if (number > toGuess + 5 || number < toGuess - 5) {
            return component.setState({message: 'Very warm'});
        } else if (number > toGuess || number < toGuess) {
            return component.setState({message: 'Almost there!'});
        } else if (number === toGuess) {
            return component.setState({
                message: `Bingo! The number to guess was ${toGuess}!`,
                won: true
            });
        }
    }

    onGuessSubmit(e) {
        e.preventDefault();
        const number = Number(e.target.guessinput.value);
        e.target.guessinput.value = "";
        if (this.isValid(number, this)) {
            this.HotOrCold(number, this);
            this.setState({
                lastGuess: e.target.guessinput.value,
                guessHistory: this.state.guessHistory.concat([number]),
                numberAttempts: this.state.numberAttempts + 1 
            });
        }
    }

    onReset() {
        this.setState({
            numberToGuess: Math.round(Math.random()*100),
            lastGuess: null,
            guessHistory: [],
            numberAttempts: 0,
            message: 'Make your guess!',
            won: false
        });
    }

    render() {
    	return (
    		<div className="App">
	    		<Header onReset={this.onReset} />
	    		<div className="body-container">
	    			<GameContainer onGuessSubmit={this.onGuessSubmit} options={this.state}/>
	    		</div>
    		</div>
    	);
    }
}