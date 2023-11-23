import React from 'react';
import { render } from '@testing-library/react-native';
import CustomHeader from '../components/CustomHeader/CustomHeader';

describe('CustomHeader', () => {
  it('renders correctly with the provided title', () => {
    const { getByText } = render(<CustomHeader title="My Custom Header" />);

    expect(getByText('My Custom Header')).toBeTruthy();
  });
});
