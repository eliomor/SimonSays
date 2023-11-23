import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';

import AppNavigator from '~/navigation/AppContainer';
import { store } from '~/redux/store';
import { loadResults } from '~/redux/resultsSlice';

const App: React.FC = () => {
  useEffect(() => {
    const initializeResults = async () => {
      try {
        const storedResults = await AsyncStorage.getItem('results');
        if (storedResults) {
          store.dispatch(loadResults(JSON.parse(storedResults)));
        }
      } catch (error) {}
    };

    initializeResults();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
