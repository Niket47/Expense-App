import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from './Input';

const FormInput = () => {
  return (
    <View >
      <Input
        lable="Amount"
        textInputConfig={{
          keyboardType: 'number-pad',
        }}
      />
      <Input lable="Title" />
      <Input
        lable="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
      <Input
        lable="Date"
        textInputConfig={{
          placeholder: 'DD-MM-YYYY',
          maxLength: 10,
        }}
      />
    </View>
  );
};


export default FormInput;
