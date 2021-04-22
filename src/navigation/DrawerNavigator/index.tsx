import MainStackNavigator from '@navigation/MainStackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Root"
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Root" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
}
