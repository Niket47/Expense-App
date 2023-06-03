import {React, useState} from 'react';
import {Text, View} from 'react-native';
import Input from './Input';
import Icons from 'react-native-vector-icons/AntDesign';
import {Stack, Button} from '@react-native-material/core';

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState({
    Amount: '',
    Title: '',
    Date: '',
    Description: '',
  });

  const inputChangeHandler = (inputidentifier, enteredvalue) => {
    setInputValues(currInputvalue => {
      return {...currInputvalue, [inputidentifier]: enteredvalue};
    });
  };
  const onSubmitHandler = () => {
    const expenseData = {
      Amount: +inputValues.Amount,
      Title: inputValues.Title,
      Date: new Date(inputValues.Date),
      Description: inputValues.Description,
    };
    console.log(expenseData);
    setInputValues('');
  };

  return (
    <View>
      <Text>add data</Text>
      <Stack spacing={2} style={{margin: 10}}>
        <Input
          textInputConfig={{
            keyboardType: 'decimal-pad',
            label: 'Amount',
            leading: props => <Icons name="doubleright" {...props} />,
            onChangeText: inputChangeHandler.bind(this, 'Amount'),
            value: inputValues.Amount,
          }}
        />
        <Input
          textInputConfig={{
            label: 'Title',
            leading: props => <Icons name="bars" {...props} />,
            onChangeText: inputChangeHandler.bind(this, 'Title'),
            value: inputValues.Title,
          }}
        />
        <Input
          textInputConfig={{
            placeholder: 'dd-mm-yyy',
            maxLength: 10,
            label: 'Date',
            leading: props => <Icons name="doubleright" {...props} />,
            onChangeText: inputChangeHandler.bind(this, 'Date'),
            value: inputValues.Date,
          }}
        />
        <Input
          textInputConfig={{
            multiline: true,
            label: 'Description',
            leading: props => <Icons name="doubleright" {...props} />,
            onChangeText: inputChangeHandler.bind(this, 'Description'),
            value: inputValues.Description,
          }}
        />
      </Stack>
      <View>
        <Button title="Submit" onPress={onSubmitHandler} />
      </View>
    </View>
  );
};

export default ExpenseForm;
