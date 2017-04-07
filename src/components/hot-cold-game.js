import React from 'react';

import Header from './header';
import Subheader from './subheader';
import GameContainer from './game-container';

export default class HotColdGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	test: 1
        };
    }

    render() {
    	return (
    		<div className="App">
	    		<Header />
	    		<Subheader />
	    		<div className="body-container">
	    			<GameContainer />
	    		</div>
    		</div>
    		);
    }
}