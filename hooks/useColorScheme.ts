import React from 'react';
import { ColorSchemeName } from 'react-native';
import AppContext from '../context/AppContext';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  const { isDarkTheme } = React.useContext(AppContext);
  return isDarkTheme ? 'dark' : 'light';
}
