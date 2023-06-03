import React from 'react';
import {Text, View} from 'react-native';
import {Stack, TextInput} from '@react-native-material/core';

const Input = ({lable, textInputConfig}) => {
  return (
    <View>
      <Text>{lable}</Text>
      {/* <TextInput variant="standard" {...textInputConfig} /> */}
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;
