import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '@react-native-material/core';
import ExpensesItem from '../ExpensesComp/ExpensesItem';

const Budget = () => {
  return (
    // <View>
    //   <Text>Budget</Text>
    //   <Button title="Click Me" onPress={() => alert('🎉🎉🎉')} />
    // </View>
    <ExpensesItem />
  );
};

export default Budget;
