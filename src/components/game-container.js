import React from 'react';

import GameHeader from './game-header';
import GameBody from './game-body';
import GameFooter from './game-footer';

export default function GameContainer(props) {
    return (
        <div className="game-container">
            <GameHeader message={props.options.message} />
            <GameBody onSubmit={props.onGuessSubmit} numberAttempts={props.options.numberAttempts} />
            <GameFooter guessHistory={props.options.guessHistory} />
        </div>
    );
}
