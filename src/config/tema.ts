// src/config/tema.ts

import { DefaultTheme } from 'styled-components/native';
import { cores } from './cores';

const tema = {
  ...DefaultTheme,
  colors: {
    primary: cores.primary,
    secondary: cores.secondary,
    background: cores.background,
    text: cores.text,
    border: cores.border,
  },
  fonts: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    bold: 'Roboto-Bold',
  },
};

export default tema;