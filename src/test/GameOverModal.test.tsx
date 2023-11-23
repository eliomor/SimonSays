import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameOverModal from '../components/GameOverModal/GameOverModal';

describe('GameOverModal', () => {
  it('renders correctly when isNewHighScore is false', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <GameOverModal
        visible={true}
        score={100}
        onClose={onCloseMock}
        onAddScore={() => {}}
        isNewHighScore={false}
      />,
    );

    expect(getByText('Game Over! Your score is 100')).toBeTruthy();
    expect(getByText('Close')).toBeTruthy();

    fireEvent.press(getByText('Close'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('renders correctly when isNewHighScore is true', () => {
    const onCloseMock = jest.fn();
    const onAddScoreMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <GameOverModal
        visible={true}
        score={200}
        onClose={onCloseMock}
        onAddScore={onAddScoreMock}
        isNewHighScore={true}
      />,
    );

    expect(getByText('Game Over! Your score is 200')).toBeTruthy();
    expect(getByText('Congratulations! New High Score!')).toBeTruthy();

    fireEvent.changeText(getByPlaceholderText('Enter Your Name'), 'Test User');
    fireEvent.press(getByText('Add Score'));

    expect(onAddScoreMock).toHaveBeenCalledWith('Test User', 200);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
