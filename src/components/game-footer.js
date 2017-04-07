import React from 'react';

export default function GameFooter(props) {
	const history = props.guessHistory.map((guess, index) => {
		return <span className="guess-history-single" key={index}>
                {guess}
            </span>
	});
    return (
    	<div className="game-footer">
    		{history}
    	</div>
    );
}