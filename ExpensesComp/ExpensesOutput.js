import React from 'react';
import {Text, View} from 'react-native';
import ExpenseSummry from './ExpenseSummry';
import ExpensesList from './ExpensesList';

const DummyDATA = [
  {
    id: '01',
    title: 'First Item',
    amount: 100,
  },
  {
    id: '02',
    title: 'Second Item',
    amount: 100,
  },
  {
    id: '03',
    title: 'Third Item',
    amount: 100,
  },
];
const ExpensesOutput = ({expense, expensPeriod}) => {
  return (
    <View>
      <ExpenseSummry PeriodName={expensPeriod} expense={DummyDATA} />
      <ExpensesList expense={DummyDATA} />
    </View>
  );
};

export default ExpensesOutput;
