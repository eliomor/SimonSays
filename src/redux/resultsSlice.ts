import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Result } from '~/types/index';
import { RootState } from './store';

interface ResultsState {
  results: Result[];
}

const initialState: ResultsState = {
  results: [],
};

export const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    loadResults: (state, action: PayloadAction<Result[]>) => {
      state.results = action.payload;
    },
    addResult: (state, action: PayloadAction<Result>) => {
      state.results.push(action.payload);
      state.results.sort((a, b) => b.score - a.score);
      if (state.results.length > 10) {
        state.results.length = 10;
      }

      AsyncStorage.setItem('results', JSON.stringify(state.results)).catch(
        (error) => {
          console.error('Error updating AsyncStorage:', error);
        },
      );
    },
  },
});

export const { loadResults, addResult } = resultsSlice.actions;

export const selectResults = (state: RootState) => state.results.results;

export const selectLowestScore = (state: RootState) => {
  if (state.results.results.length < 10) {
    return 0;
  }
  return state.results.results[state.results.results.length - 1].score;
};
export default resultsSlice.reducer;
