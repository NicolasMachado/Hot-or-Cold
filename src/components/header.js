import React from 'react';
import {connect} from 'react-redux';
import {resetGame} from '../actions';

export function Header(props) {
    return (
    	<div className="App-header">
            <h2>Hot and Cold</h2>
            <nav>
                <div onClick={() => props.dispatch(resetGame())} className="new-game-link">New game</div>
            </nav>
        </div>
    );
}

export default connect()(Header);
