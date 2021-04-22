import { AppContextProvider } from '@context/AppContext';
import useCachedResources from '@hooks/useCachedResources';
import Navigation from '@navigation/index';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <Navigation />
        <StatusBar />
      </AppContextProvider>
    </SafeAreaProvider>
  );
}
