import React from 'react';
import {shallow} from 'enzyme';
import PhotoAlbum from './PhotoAlbum.js';
import Adapter from 'enzyme-adapter-react-16';

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('Integration Test:  renders without crashing', () => {
  const photoAlbum = shallow ( <PhotoAlbum /> );

});
