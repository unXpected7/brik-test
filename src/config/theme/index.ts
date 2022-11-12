import { isIOS } from '@/utils/AppUtils';
import { extendTheme } from 'native-base';
import { Colors } from './colors';

export const CustomTheme = extendTheme({
  colors: {
    ...Colors,
  },
  sizes: {
    11: 44,
    '11.5': 46,
  },
  fonts: {
    lato: 'Lato',
  },
  fontConfig: {
    Lato: {
      500: {
        normal: 'Lato_400Regular',
      },
      700: {
        normal: 'Lato_700Bold',
      },
    },
  },
  fontSizes: {
    /**
     * xs:12
     * sm:14
     * md:16
     * lg:18
     * xl:20
     * 2xl:26
     */
    '2xl': 26,
  },
  components: {
    /**
     * override default text
     */

    /**
     * override default text
     */
    Text: {
      baseStyle: {
        color: 'font.primary',
        fontFamily: 'lato',
        fontWeight: 'medium',
      },
    },

    /**
     * override default text
     */
    Input: {
      baseStyle: {
        placeholderTextColor: 'font.primary',
        fontFamily: 'lato',
        fontWeight: 'medium',
      },
    },
  },
});
