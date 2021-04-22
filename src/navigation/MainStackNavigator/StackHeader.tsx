import { expo } from '@/../app.json';
import useAppContext from '@hooks/useAppContext';
import { DrawerActions } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React from 'react';
import { Appbar, Switch } from 'react-native-paper';

const CustomNavigationBar: React.FC<StackHeaderProps> = ({ navigation }) => {
  const { isDarkTheme, setIsDarkTheme } = useAppContext();
  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <Appbar.Header>
      {/* {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null} */}
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Appbar.Content title={`${expo.name} v${expo.version}`} />
      <Switch value={isDarkTheme} onValueChange={toggleDarkTheme} />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
