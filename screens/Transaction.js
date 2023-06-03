import React from 'react';
import {Text, View} from 'react-native';
import ExpensesOutput from '../ExpensesComp/ExpensesOutput';

const Transaction = () => {
  return (
    <View>
      <ExpensesOutput expensPeriod="You Spend" />
    </View>
  );
};

export default Transaction;
