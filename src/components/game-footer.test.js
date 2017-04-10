import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import GameFooter from './game-footer';

describe('<GameFooter />', () => {
    it('renders without crashing', () => {
        shallow(<GameFooter guessHistory={[10, 20, 30]} />);
    });

    it('Renders the history with actual history', () => {
        const wrapper = shallow(<GameFooter guessHistory={[10, 20, 30]} />);
        expect(wrapper.find('.guess-history-single').length).toBe(3);
    });

    it('Renders the empty history', () => {
        const wrapper = shallow(<GameFooter guessHistory={[]} />);
        expect(wrapper.find('.guess-history-single').length).toBe(0);
    });
});
