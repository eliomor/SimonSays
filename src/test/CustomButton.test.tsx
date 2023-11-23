import React from 'react';
import { render } from '@testing-library/react-native';
import CustomHeader from '../components/CustomHeader/CustomHeader';

describe('CustomHeader', () => {
  it('renders the title correctly', () => {
    const title = 'Test Title';
    const { getByText } = render(<CustomHeader title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeTruthy();
  });
});
