import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#fdecf3', '#252323')(props),
    },
  }),
};

const colors = {
  brand: {
    50: '#fdecf3',
    100: '#fbdae7',
    200: '#f8b8d1',
    300: '#f6a2c2',
    400: '#f27daa',
    500: '#ee5892',
    600: '#e9206d',
    700: '#ba1252',
    800: '#820d3a',
    900: '#380619',
  },
};

const fonts = {
  heading: `Josefin Sans, ${base.fonts.heading}`,
};

const components = {
  Button: {
    variants: {
      pill: (props) => ({
        ...base.components.Button.variants.outline(props),
        rounded: 'full',
        color: 'gray.500',
      }),
    },
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
