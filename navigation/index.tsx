import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Switch } from 'react-native';
import AppContext from '../context/AppContext';
import useColorScheme from '../hooks/useColorScheme';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Text } from '../components/Themed';
import { expo } from '../app.json';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AppContext);
  const toggleDarkTheme = () => setIsDarkTheme(previousState => !previousState);
  return (
    <Stack.Navigator
      screenOptions={{
        title: `${expo.name} v${expo.version}`,
        headerRight: ({ tintColor }) => (
          <>
            <Text
              style={{ padding: 10, fontSize: 20 }}
              onPress={toggleDarkTheme}
            >
              {isDarkTheme ? '🌞' : '🌛'}
            </Text>
            <Switch
              thumbColor={tintColor}
              value={isDarkTheme}
              onValueChange={toggleDarkTheme}
            />
          </>
        ),
        headerRightContainerStyle: {
          flexDirection: 'row',
          alignItems: 'center',
        },
      }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
