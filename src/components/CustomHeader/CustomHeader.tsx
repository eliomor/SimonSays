import React from 'react';
import { View, Text } from 'react-native';

import headerStyles from './CustomHeaderStyles';

const CustomHeader = ({ title }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;
