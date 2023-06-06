import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {GlobalStyles} from '../constants/styles';

const ExpensesItem = () => {
  return (
    <Pressable>
      <View style={styles.Container}>
        <View style={styles.subContainer}>
          <View style={styles.icon}>
            <Icons name="paperclip" size={40} color="#0077FF" />
          </View>
          <View>
            <Text style={styles.title}>title</Text>
            <Text style={styles.subtitle}>des</Text>
          </View>
        </View>
        <View style={styles.boxb}>
          <Text style={styles.amounttitle}>amount</Text>
          <Text style={styles.subtitle}>date</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: GlobalStyles.colors.GrayColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  subContainer: {
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 2,
    backgroundColor: GlobalStyles.colors.whiteColor,
    borderRadius: 10,
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
    color: GlobalStyles.colors.blackColor,
    textTransform: 'capitalize',
  },
  subtitle: {
    fontSize: 16,
    color: GlobalStyles.colors.blackColor,
    textTransform: 'capitalize',
  },
  amounttitle: {
    fontWeight: 600,
    fontSize: 23,
    color: GlobalStyles.colors.blackColor,
    textTransform: 'capitalize',
  },
  boxb: {
    justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.whiteColor,
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 5,
  },
});

export default ExpensesItem;
