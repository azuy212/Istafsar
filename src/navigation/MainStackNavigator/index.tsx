import { MainStackParamList } from '@navigation/types';
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from '@screens/NotFoundScreen';
import TabOneScreen from '@screens/TabOneScreen';
import React from 'react';
import StackHeader from './StackHeader';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <StackHeader {...props} /> }}
    >
      <Stack.Screen name="Home" component={TabOneScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
