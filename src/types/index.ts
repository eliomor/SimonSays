import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface Result {
  id: string;
  name: string;
  score: number;
}

export interface SoundFiles {
  [key: string]: string;
}

type RootStackParamList = {
  GameScreen: undefined;
  ResultsScreen: undefined;
};

export type GameScreenRouteProp = RouteProp<RootStackParamList, 'GameScreen'>;
export type GameScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GameScreen'
>;

export type ResultsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ResultsScreen'
>;
export type ResultsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ResultsScreen'
>;
