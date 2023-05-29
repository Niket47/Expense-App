import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenBtn from '../components/ScreenBtn';
import {useNavigation} from '@react-navigation/native';

const GooforTransaction = () => {
  const navigation = useNavigation();
  
  const ExpensesHandler = () => {
    navigation.navigate('ExpensesModal');
  };
  const IncomeHandler = () => {
    navigation.navigate('IncomeModal');
  };
  const TransferHandler = () => {
    navigation.navigate('TransferModal');
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>Select Transaction Screen</Text>
        </View>
        <View style={styles.innercontainer}>
          <ScreenBtn onBtnPress={ExpensesHandler}>Expanse</ScreenBtn>
          <ScreenBtn onBtnPress={IncomeHandler}>Income</ScreenBtn>
          <ScreenBtn onBtnPress={TransferHandler}>Transfer</ScreenBtn>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'oldlace',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  innercontainer: {
    marginTop: 15,
    backgroundColor: 'oldlace',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'poppins',
  },
});
export default GooforTransaction;
