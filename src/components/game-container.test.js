import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import GameContainer from './game-container';
import {stateBase} from '../App';

describe('<GameContainer />', () => {
    it('renders without crashing', () => {
        shallow(<GameContainer options={stateBase} />);
    });
});
