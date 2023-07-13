import React from 'react';
import LoginScreen from '@screens/LoginScreen/index';
import { render } from '@testing-library/react-native';

describe('LoginScreen', () => {
  it('should be rendered correctly', () => {
    const { toJSON } = render(<LoginScreen />);

    expect(toJSON()).toMatchSnapshot();
  });
});
