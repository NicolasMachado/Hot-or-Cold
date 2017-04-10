import React from 'react';

export default function GameBody(props) {
    return (
        <div className="game-body">
            <form onSubmit={props.onSubmit} id="form-guess">
            	<input name="guessinput" id="guess-input" type="number" placeholder="Guess between 0 and 100" />
            	<input id="guess-submit" type="submit" value="Guess" />
            </form>
            <div id="number-attempts">
            	Number of attempts: <span className="nb-attempts">{props.numberAttempts}</span>
            </div>
        </div>
    );
}
