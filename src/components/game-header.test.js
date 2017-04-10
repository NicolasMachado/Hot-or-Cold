import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import GameHeader from './game-header';

describe('<GameHeader />', () => {
    it('renders without crashing', () => {
        shallow(<GameHeader />);
    });
});
