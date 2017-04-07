import React from 'react';

export default function GameHeader(props) {
    return (
        <div className="game-header">
            <h3>{props.message}</h3>
        </div>
    );
}