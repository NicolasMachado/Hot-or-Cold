import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';

import {Header} from './header';

describe('<Header />', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });
});
