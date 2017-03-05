import React from 'react';
import {Link} from 'react-router';
import { Provider } from 'react-redux'
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme'

import App from './App';

describe('App', () => {
  it('renders as a section', () => {
    const wrapper = shallow(<App/>)
    assert.equal(wrapper.type(), 'section')
  });
});
