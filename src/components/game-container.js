import React from 'react';

export default class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 2
        };
    }

    render() {
      return (
        <div className="game-container">
            <div className="game-header">
                game header
            </div>
            <div className="game-body">
                game body
            </div>
            <div className="game-footer">
                game footer
            </div>
        </div>
      );
    }
}