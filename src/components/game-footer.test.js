import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import GameFooter from './game-footer';

describe('<GameFooter />', () => {
    it('renders without crashing', () => {
        shallow(<GameFooter guessHistory={[10, 20, 30]} />);
    });

    it('Renders the form-guess initially', () => {
        const wrapper = shallow(<GameFooter guessHistory={[10, 20, 30]} />);
        //expect(wrapper.find('.guess-history-single').text()).toEqual("30");
        expect(wrapper.children()).to.have.length(3);
    });
/*
    it('Renders the form-guess initially', () => {
        const wrapper = shallow(<GameBody />);
        expect(wrapper.hasClass('game-body')).toEqual(true);
    });

    it('Should set the counter div correctly', () => {
        const wrapper = shallow(<GameBody numberAttempts="30" />);
        expect(wrapper.find('.nb-attempts').text()).toEqual("30");
    });*/
});
