import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { GameScreenNavigationProp } from '~/types/index';
import { soundFiles } from '~/assets/sounds';
import useSoundManager from '~/hooks/useSoundManager';
import { addResult, selectLowestScore } from '~/redux/resultsSlice';
import { checkSequence, addRandomColorToSequence } from '~/utils/gameUtils';
import CustomButton from '~/components/CustomButton/CustomButton';
import GameButton from '~/components/GameButton/GameButton';
import GameOverModal from '~/components/GameOverModal/GameOverModal';

import styles from './GameScreenStyles';

const GameScreen: React.FC = () => {
  const dispatch = useDispatch();
  const lowestScore = useSelector(selectLowestScore);
  const { playSound } = useSoundManager(soundFiles);
  const navigation = useNavigation<GameScreenNavigationProp>();

  const [gameSequence, setGameSequence] = useState<string[]>([]);
  const [userSequence, setUserSequence] = useState<string[]>([]);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState(1);
  const [turn, setTurn] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isNewHighScore, setIsNewHighScore] = useState(false);

  useEffect(() => {
    if (gameStarted && gameSequence.length === level) {
      setTurn('simon');
      playSequence();
    }
  }, [gameSequence, gameStarted, level]);

  useEffect(() => {
    if (activeButton) {
      playSound(activeButton);
    }
  }, [activeButton]);

  const playSequence = () => {
    let index = 0;
    const interval = setInterval(() => {
      setActiveButton(gameSequence[index]);
      playSound(gameSequence[index]);

      setTimeout(() => setActiveButton(null), 300);

      index++;
      if (index === gameSequence.length) {
        clearInterval(interval);
        setTimeout(() => setTurn('user'), 100);
      }
    }, 800);
  };

  const handleButtonPress = (color: string) => {
    if (!gameStarted || turn !== 'user') return;

    setActiveButton(color);
    playSound(color);
    const newSequence = [...userSequence, color];
    setUserSequence(newSequence);

    setTimeout(() => setActiveButton(null), 500);

    if (!checkSequence(newSequence, gameSequence)) {
      setIsNewHighScore(level - 1 > lowestScore);
      setIsGameOver(true);
      return;
    }

    if (newSequence.length === gameSequence.length) {
      setLevel(level + 1);
      setUserSequence([]);
      setTurn('simon');
      addColorToSequence();
    }
  };

  const startGame = () => {
    resetGame();
    setGameStarted(true);
    addColorToSequence();
  };

  const addColorToSequence = () => {
    const randomColor = addRandomColorToSequence(soundFiles);
    setGameSequence([...gameSequence, randomColor]);
  };

  const resetGame = () => {
    setGameSequence([]);
    setUserSequence([]);
    setLevel(1);
    setGameStarted(false);
    setTurn('');
  };

  const onCloseModal = () => {
    setIsGameOver(false);
    resetGame();
  };

  const addScore = (name: string, score: number) => {
    dispatch(addResult({ id: Date.now().toString(), name, score }));
  };

  const navigateToResults = () => {
    navigation.navigate('ResultsScreen');
  };

  return (
    <View style={styles.container}>
      {!gameStarted && <CustomButton text="Start Game" onPress={startGame} />}
      {gameStarted && (
        <>
          <Text style={styles.turnText}>
            {turn === 'simon' ? "Simon's Turn" : 'Your Turn'}
          </Text>
          <Text style={styles.scoreText}>Score: {level - 1}</Text>
        </>
      )}
      <View style={styles.centerButtons}>
        {Object.keys(soundFiles).map((color) => (
          <GameButton
            key={color}
            color={color}
            isActive={activeButton === color}
            onPress={() => handleButtonPress(color)}
          />
        ))}
      </View>
      <CustomButton text="View Results" onPress={navigateToResults} />
      <GameOverModal
        visible={isGameOver}
        score={level - 1}
        onClose={onCloseModal}
        onAddScore={addScore}
        isNewHighScore={isNewHighScore}
      />
    </View>
  );
};

export default GameScreen;
