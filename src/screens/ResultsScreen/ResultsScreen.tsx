import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ResultsScreenNavigationProp } from '~/types/index';
import { RootState } from '~/redux/store';
import CustomButton from '~/components/CustomButton/CustomButton';

import styles from './ResultsScreenStyles';

interface ResultsScreenProps {}

const ResultsScreen: React.FC<ResultsScreenProps> = () => {
  const results = useSelector((state: RootState) => state.results.results);
  const navigation = useNavigation<ResultsScreenNavigationProp>();

  const navigateToGame = () => {
    navigation.navigate('GameScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 10 Results</Text>
      {results.map((item, index) => (
        <View style={styles.resultItem} key={item.id}>
          <Text style={styles.resultText}>{`${index + 1}. ${item.name}`}</Text>
          <Text style={styles.scoreText}>{`Score: ${item.score}`}</Text>
        </View>
      ))}
      <CustomButton text="Play Simon Says" onPress={navigateToGame} />
    </View>
  );
};

export default ResultsScreen;
