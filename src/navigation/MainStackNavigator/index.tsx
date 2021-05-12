import { MainStackParamList } from '@navigation/types';
import { createStackNavigator } from '@react-navigation/stack';
import NotFoundScreen from '@screens/NotFoundScreen';
import QuestionList from '@screens/QuestionList/index';
import React from 'react';
import StackHeader from './StackHeader';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ header: props => <StackHeader {...props} /> }}
    >
      <Stack.Screen name="Home" component={QuestionList} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
