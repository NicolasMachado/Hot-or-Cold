import React from 'react';

export default function Header(props) {
    return (
    	<div className="App-header">
            <h2>Hot and Cold</h2>
            <nav><div onClick={props.onReset} className="new-game-link">New game</div></nav>
        </div>
    );
}