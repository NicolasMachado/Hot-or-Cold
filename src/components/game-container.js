import React from 'react';
import {connect} from 'react-redux';

import GameHeader from './game-header';
import GameBody from './game-body';
import GameFooter from './game-footer';

export function GameContainer(props) {
    return (
        <div className="game-container">
            <GameHeader message={props.game.message} />
            <GameBody onSubmit={props.onGuessSubmit} numberAttempts={props.game.numberAttempts} />
            <GameFooter guessHistory={props.game.guessHistory} />
        </div>
    );
}

export default connect()(GameContainer);
