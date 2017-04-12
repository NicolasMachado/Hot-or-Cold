import React from 'react';
import {connect} from 'react-redux';
import {guessSubmit} from '../actions';

export function GameBody(props) {

    function submitGuess (e) {
        e.preventDefault();
        props.dispatch(guessSubmit(e.target.guessinput.value));
        e.target.guessinput.value = "";
    };

    return (
        <div className="game-body">
            <form onSubmit={e => submitGuess(e)} id="form-guess">
            	<input name="guessinput" id="guess-input" type="number" placeholder="Guess between 0 and 100" />
            	<input id="guess-submit" type="submit" value="Guess" />
            </form>
            <div id="number-attempts">
            	Number of attempts: <span className="nb-attempts">{props.numberAttempts}</span>
            </div>
        </div>
    );
}

export default connect()(GameBody);
