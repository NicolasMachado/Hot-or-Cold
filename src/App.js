import React from 'react';
import {connect} from 'react-redux';
import './App.css';

import Header from './components/header';
import GameContainer from './components/game-container';

export class App extends React.Component {
/*

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
                guessHistory: this.state.guessHistory.concat([number]),
                numberAttempts: this.state.numberAttempts + 1
            });
        }
    }

*/
    render() {
    	return (
    		<div className="App">
	    		<Header />
	    		<div className="body-container">
                    <GameContainer game={this.props.game}/>
	    		</div>
    		</div>
    	);
    }
}

App.defaultProps = {
    game: {
        numberToGuess: Math.round(Math.random()*100),
        guessHistory: [],
        numberAttempts: 0,
        message: 'Make your guess!',
        won: false
    }
};

export const mapStateToProps = state => ({
    game: state
});

export default connect(mapStateToProps)(App);
