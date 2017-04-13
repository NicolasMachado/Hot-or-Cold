import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {GameContainer} from './game-container';
import {mapStateToProps} from '../App';

describe('<GameContainer />', () => {
    it('renders without crashing', () => {
        shallow(<GameContainer game={mapStateToProps} />);
    });
});
