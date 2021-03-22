// useColorScheme from react-native does not support web currently. You can replace

import { ColorSchemeName } from 'react-native';

// this with react-native-appearance if you would like theme support on web.
export default function useColorScheme(): NonNullable<ColorSchemeName> {
  return 'light';
}
