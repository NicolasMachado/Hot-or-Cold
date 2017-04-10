import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import GameBody from './game-body';

describe('<GameBody />', () => {
    it('renders without crashing', () => {
        shallow(<GameBody />);
    });

    it('Renders the form-guess initially', () => {
        const wrapper = shallow(<GameBody />);
        expect(wrapper.hasClass('game-body')).toEqual(true);
    });

    it('Should set the counter div correctly', () => {
        const wrapper = shallow(<GameBody numberAttempts="30" />);
        expect(wrapper.find('.nb-attempts').text()).toEqual("30");
    });

    it('Should fire the onSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GameBody onSubmit={callback} numberAttempts="30" />);
        wrapper.find('input[type="number"]').node.value = "50";
        wrapper.find('#form-guess').simulate('submit');
        expect(callback).toHaveBeenCalled();
    });
});
