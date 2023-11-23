import React, { useState } from 'react';
import { View, Modal, Text, TextInput } from 'react-native';

import CustomButton from '~/components/CustomButton/CustomButton';
import styles from './GameOverModalStyles';

type GameOverModalProps = {
  visible: boolean;
  score: number;
  onClose: () => void;
  onAddScore: (name: string, score: number) => void;
  isNewHighScore: boolean;
};

const GameOverModal: React.FC<GameOverModalProps> = ({
  visible,
  score,
  onClose,
  onAddScore,
  isNewHighScore,
}) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    onAddScore(name, score);
    onClose();
    setName('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Game Over! Your score is {score}</Text>
        {isNewHighScore && (
          <>
            <Text style={styles.modalText}>
              Congratulations! New High Score!
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setName}
              value={name}
              placeholder="Enter Your Name"
            />
            <CustomButton text="Add Score" onPress={handleSubmit} />
          </>
        )}
        {!isNewHighScore && <CustomButton text="Close" onPress={onClose} />}
      </View>
    </Modal>
  );
};

export default GameOverModal;
