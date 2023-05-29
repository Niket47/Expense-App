import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import {GlobalStyles} from '../constants/styles';

const Input = ({lable, textInputConfig}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.lable}>{lable}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 8,
  },
  lable: {
    fontSize: 15,
    color: GlobalStyles.colors.blackColor,
  },
  input: {
    padding: 3,
    fontSize: 18,
    borderColor: '#8B919A',
    borderBottomWidth: 1,
    color: '#414752',
  },
});
export default Input;
