import React from 'react';
import {Text, View, FlatList} from 'react-native';

const renderExpensesItem = itemData => {
  return <Text>{itemData.item.title}</Text>;
};
const ExpensesList = ({expense}) => {
  return (
    <FlatList
      data={expense}
      renderItem={renderExpensesItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesList;
