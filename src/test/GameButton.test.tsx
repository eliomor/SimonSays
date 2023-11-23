import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameButton from '../components/GameButton/GameButton';

describe('GameButton', () => {
  it('renders correctly when isActive is true', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <GameButton color="blue" isActive={true} onPress={onPressMock} />,
    );
    const button = getByTestId('game-button');

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders correctly when isActive is false', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <GameButton color="red" isActive={false} onPress={onPressMock} />,
    );
    const button = getByTestId('game-button');

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
