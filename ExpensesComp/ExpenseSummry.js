import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const ExpenseSummry = ({expense, PeriodName}) => {
  const totalExpanseSum = expense.reduce((sum, expenses) => {
    return sum + expenses.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{PeriodName}</Text>
      <Text style={styles.subtext}>${totalExpanseSum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#EEE5FF',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 25,
    textTransform: 'capitalize',
    color: GlobalStyles.colors.blackColor,
    fontWeight: 500,
  },
  subtext: {
    fontSize: 20,
    color: GlobalStyles.colors.blackColor,
    fontWeight: 400,
  },
});
export default ExpenseSummry;
