import React from 'react';
import {Text, View} from 'react-native';
import ExpensesOutput from '../ExpensesComp/ExpensesOutput';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <View>
        <ExpensesOutput expensPeriod="last 7 days" />
      </View>
    </View>
  );
};

export default Home;
