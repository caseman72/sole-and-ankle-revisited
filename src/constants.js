export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phoneMax:  { px:  600, rem: 37.5   },
  tabletMax:  { px:  950, rem: 59.375 },
  laptopMax: { px: 1300, rem: 81.25  }
};

export const QUERIES = {
  phoneAndSmaller : `(max-width: ${BREAKPOINTS.phoneMax.rem+0.001}rem)`,
  tabletAndSmaller : `(max-width: ${BREAKPOINTS.tabletMax.rem+0.001}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax.rem+0.001}rem)`,
};
