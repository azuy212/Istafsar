// useColorScheme from react-native does not support web currently. You can replace

import React from 'react';
import { ColorSchemeName } from 'react-native';
import AppContext from '../context/AppContext';

// this with react-native-appearance if you would like theme support on web.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  const { isDarkTheme } = React.useContext(AppContext);
  return isDarkTheme ? 'dark' : 'light';
}
