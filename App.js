import React from 'react';
import {StatusBar} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import AllExpenses from './screens/AllExpenses';
import Transaction from './screens/Transaction';
import Budget from './screens/Budget';
import Profile from './screens/Profile';
import {GlobalStyles} from './constants/styles';
import AddOperation from './screens/AddOperation';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.headerColor},
        tabBarStyle: {backgroundColor: GlobalStyles.colors.whiteColor},
        tabBarActiveTintColor: GlobalStyles.colors.ActiveColor,
      }}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'HomeScreen',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="transaction"
        component={Transaction}
        options={{
          title: 'TransactionScreen',
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color, size}) => (
            <Icons name="retweet" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AddOperation"
        component={AddOperation}
        options={{
          title: 'AddOperationScreen',
          tabBarLabel: 'AddOperation',
          tabBarIcon: ({color, size}) => (
            <Icons name="pluscircleo" color={color} size={size} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Budget"
        component={Budget}
        options={{
          title: 'BudgetScreen',
          tabBarIcon: ({color, size}) => (
            <Icons name="barschart" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'profileScreen',
          tabBarIcon: ({color, size}) => (
            <Icons name="user" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen name="AllExpense" component={AllExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
