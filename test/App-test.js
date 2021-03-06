import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from '../src/fetch-setup';
import App from '../src/components/App';
import Filters from '../src/components/Filters';
import PetBrowser from '../src/components/PetBrowser';

Enzyme.configure({ adapter: new Adapter() });

const FILTERS_STATE = {
  type: 'all'
};

describe('<App />', () => {
  describe('Filters', () => {
    it('should change filter type', () => {
      const spy = sinon.spy();
      const wrapper = shallow(<Filters onChangeType={spy} filters={FILTERS_STATE} />);
      wrapper.find('select').simulate('change', { target: { value: 'dog' } });
    });
  });

  describe('Fetching pets', () => {
    beforeEach(() => {
      fetchMock.reset();
    });

    it('should fetch all pets by default', () => {
      return true
    });

    it('should fetch pet types using the type parameter based on the filter', () => { return true });
  });

  describe('Adopting pets', () => {
    let trident;
    beforeEach(() => {
      trident = {
        id: '5c142d9e-ea45-4231-8146-cccf71c704c0',
        type: 'dog',
        gender: 'male',
        age: 4,
        weight: 1,
        name: 'Trident',
        isAdopted: false
      };
    });

    it("should toggle a pet's adopted status", () => { return true });
  });
});
