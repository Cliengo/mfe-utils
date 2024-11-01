import { createTheme, Theme } from '@mui/material';

import { colors } from './colors';
import { fadeInSlideUp } from './utils';

export const theme: Theme = createTheme({
  typography: {
    fontFamily: 'Inter Variable, Inter, sans-serif',
    allVariants: {
      color: '#424242',
    },
    subtitle1: {
      fontSize: '18px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1086,
      xl: 1280,
      xxl: 1920,
      dialog: 822,
    },
  },
  palette: {
    primary: {
      main: '#6150AD',
      light: '#CABEFF',
      dark: '#1C0062',
      contrastText: '#FFF',
    },
    secondary: colors.secondary,
    background: {
      default: '#FAFAFA',
    },
    divider: 'rgba(0, 0, 0, 0.23)',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          fontFamily: 'Inter Variable, Inter, sans-serif',
        },
        'body': {
          backgroundColor: '#FAFAFA',
        },
        '.material-icons': {
          marginBottom: '0.25rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#515151',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'cta' },
          style: {
            color: '#fff',
            backgroundColor: colors.primary.main,
            height: '40px',
            minWidth: '140px',
            borderRadius: '999px',
            leadingTrim: 'both',
            textEdge: 'cap',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '0.1px',
            '&:hover': {
              backgroundColor: colors.primary[700],
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: '#fff',
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            '&:hover': {
              backgroundColor: colors.primary[700],
            },
          },
        },
        {
          props: { variant: 'contained', color: 'error' },
          style: {
            color: colors.error[700],
            backgroundColor: 'rgba(197, 17, 17, 0.30)',
            '&:hover': {
              backgroundColor: 'rgba(197, 17, 17, 0.50)',
            },
          },
        },
        {
          props: { disabled: true },
          style: {
            backgroundColor: '#f4f4f4',
            color: '#424242 !important',
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: '999rem',
          paddingLeft: 24,
          paddingRight: 24,
          boxShadow: 'none',
          minHeight: '40px',
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: 'button' },
          style: {
            fontSize: '0.9375rem',
            border: `1px solid ${colors.primary.main}`,
            backgroundColor: 'white',
            padding: '0.375rem 1.5rem',
            color: colors.primary.main,
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: colors.primary[50],
            },
          },
        },
        {
          props: { variant: 'buttonFilled' },
          style: {
            fontSize: '0.9375rem',
            border: `1px solid ${colors.primary.main}`,
            backgroundColor: colors.primary.main,
            padding: '0.375rem 1.5rem',
            color: 'white',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: colors.primary[800],
            },
          },
        },
      ],
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: 'smallest' },
          style: {
            fontSize: '.75rem',
          },
        },
      ],
    },
    MuiPaper: {
      variants: Array.from({ length: 24 }, (_, i) => ({
        props: { elevation: i },
        style: {
          boxShadow: `0px ${i}px ${i * 2}px 0px rgba(0,0,0,0.${13 + i})`,
        },
      })),
      styleOverrides: {
        root: {
          padding: '1rem',
          borderRadius: '8px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          color: '#515151',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          overflow: 'visible',
          '& .MuiInputBase-root': {
            borderRadius: '4px',
          },
          '& .MuiFormHelperText-root': {
            marginLeft: '0px',
          },
          '& .MuiFormLabel-root': {
            fontWeight: 'normal',
            '&.Mui-focused': {
              color: '#49454F',
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#D9D9D9',
          backgroundColor: '#D9D9D9',
          width: '100%',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'helper' },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#F7F6FD',
          borderRadius: '999px',
        },
        bar: {
          borderRadius: '999px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          animation: `${fadeInSlideUp} 0.3s ease-out`,
          borderRadius: '14px',
          px: '2rem',
        },
      },
    },
  },
});
