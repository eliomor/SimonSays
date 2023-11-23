import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GameScreen from '~/screens/GameScreen/GameScreen';
import ResultsScreen from '~/screens/ResultsScreen/ResultsScreen';
import CustomHeader from '~/components/CustomHeader/CustomHeader';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="GameScreen">
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{
          header: () => <CustomHeader title="Game" />,
        }}
      />
      <Stack.Screen
        name="ResultsScreen"
        component={ResultsScreen}
        options={{
          header: () => <CustomHeader title="Results" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
