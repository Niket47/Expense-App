import 'react-native-gesture-handler';
import React from 'react';
import {Modal, StatusBar} from 'react-native';
import {View, Text} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import {GlobalStyles} from './constants/styles';
import ExpensesModal from './screens/ExpensesModal';
import GooforTransaction from './screens/GooforTransaction';
import IncomeModal from './screens/IncomeModal';
import TransferModal from './screens/TransferModal';

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();

const ExpanseOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}>
      <BottomTabs.Screen
        name="RecentExpanses"
        component={RecentExpenses}
        options={{
          title: 'Recent expanses',
          tabBarLabel: 'Recent expanses',
          tabBarIcon: ({color, size}) => (
            <Icons name="paperclip" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ExpensesInput"
        component={GooforTransaction}
        options={{
          title: 'Transaction',
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color, size}) => (
            <Icons name="plus" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({color, size}) => (
            <Icons name="areachart" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpanseOverview"
            component={ExpanseOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{presentation: 'modal'}}
          />
          <Stack.Screen
            name="ExpensesModal"
            component={ExpensesModal}
            options={{title: 'Add Expenses', presentation: 'modal'}}
          />
          <Stack.Screen
            name="IncomeModal"
            component={IncomeModal}
            options={{title: 'Add Income', presentation: 'modal'}}
          />
          <Stack.Screen
            name="TransferModal"
            component={TransferModal}
            options={{title: 'Add Transfers', presentation: 'modal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
