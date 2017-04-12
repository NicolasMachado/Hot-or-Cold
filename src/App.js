import React from 'react';
import {connect} from 'react-redux';
import './App.css';

import Header from './components/header';
import GameContainer from './components/game-container';

export class App extends React.Component {
/*

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
