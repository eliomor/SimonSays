import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './GameButtonStyles';

interface GameButtonProps {
  color: string;
  isActive: boolean;
  onPress: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({
  color,
  isActive,
  onPress,
}) => {
  const buttonStyle = {
    ...styles.button,
    backgroundColor: color,
    opacity: isActive ? 1 : 0.5,
  };

  return (
    <TouchableOpacity onPress={onPress} testID="game-button">
      <View style={buttonStyle} />
    </TouchableOpacity>
  );
};

export default GameButton;
