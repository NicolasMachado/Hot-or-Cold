import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import {Header} from './header';

describe('<Header />', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });
/*
    it('Should fire the onClick callback when the reset div is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<Header onReset={callback} />);
        wrapper.find('.new-game-link').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
    */
});
