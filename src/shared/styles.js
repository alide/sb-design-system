import { css } from 'styled-components';

// const tokens = require('./design-tokens.json');

import * as tokens from './design-tokens.json';

// Primitives
const space = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64
}

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color = {
  // Palette
  primary: tokens.primary.primary.value,
  primaryLighter: tokens.primary['primary lighter'].value,
  secondary: tokens.primary.secondary.value,
  tertiary: '#DDDDDD',

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: {
    default: tokens.border.primary.value,
    focus: '#32abe2',
  },

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  warning: '#E69D00',

  // Text
  text: {
    default: tokens.text.text.value,
    secondary: tokens.text.secondary.value,
    grey: tokens.text['gray secondary'].value,
    muted: tokens.text.muted.value,
  },

  // Background
  background: {
    primary: tokens.background.primary.value,
    secondary: tokens.background.secondary.value,
    primaryDark: tokens.background['primary dark'].value,
    secondaryDark: tokens.background['secondary dark'].value,
  }
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 0,
  },
  insetFormControl: {
    compact: {x: 0, y: space.xxs},
    regular: { x: space.sm, y: space.xs},
  }
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: '12',
    s2: '14',
    s3: '16',
    m1: '20',
    m2: '24',
    m3: '28',
    l1: '32',
    l2: '40',
    l3: '48',
    code: '90',
  },
};

export const breakpoint = 600;
export const pageMargin = '5.55555';

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
