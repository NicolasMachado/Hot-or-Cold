import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import GameHeader from './game-header';

describe('<GameHeader />', () => {
    it('renders without crashing', () => {
        shallow(<GameHeader />);
    });

    it('Renders the header with correct message', () => {
        const wrapper = shallow(<GameHeader message={"This is a test string"} />);
        expect(wrapper.find('h3').text()).toEqual("This is a test string");
    });
});
