import AppContext from '@context/AppContext';
import { AppContextTypes } from '@context/AppContext/types';
import React from 'react';

export default function useAppContext(): AppContextTypes {
  return React.useContext(AppContext);
}
