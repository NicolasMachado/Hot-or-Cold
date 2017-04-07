import React from 'react';
import './App.css';

import Header from './components/header';
import Subheader from './components/subheader';
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

        this.onGuessSubmit = this.onGuessSubmit.bind(this)
    }

    isValid(number, component) {
        if (!number) {
            return false 
        }

        if (number < 0 || number > 100) {
            component.setState({
                message: 'The number must be comprised between 0 and 100!'
            });
            return false
        }

        if (component.state.guessHistory.indexOf(number) > -1) {
            component.setState({
                message: 'You already guessed this number!'
            });
            return false
        }

        return true
    }

    HotOrCold(number, component) {

    }

    onGuessSubmit(e) {
        e.preventDefault();
        if (this.state.won) {
            return false
        }
        const number = e.target.guessinput.value;
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

    render() {
    	return (
    		<div className="App">
	    		<Header />
	    		<Subheader />
	    		<div className="body-container">
	    			<GameContainer onGuessSubmit={this.onGuessSubmit} options={this.state}/>
	    		</div>
    		</div>
    	);
    }
}