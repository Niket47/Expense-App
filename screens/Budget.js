import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '@react-native-material/core';

const Budget = () => {
  return (
    <View>
      <Text>Budget</Text>
      <Button title="Click Me" onPress={() => alert('🎉🎉🎉')} />
    </View>
  );
};

export default Budget;
