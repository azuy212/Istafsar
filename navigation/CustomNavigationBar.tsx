import React from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

import { expo } from '../app.json';
import AppContext from '../context/AppContext';

const CustomNavigationBar: React.FC<StackHeaderProps> = ({
  navigation,
  previous,
}) => {
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AppContext);
  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={`${expo.name} v${expo.version}`} />
      <Switch value={isDarkTheme} onValueChange={toggleDarkTheme} />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
