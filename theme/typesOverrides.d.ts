import '@mui/material/Chip';
import '@mui/material/TextField';
import '@mui/material/SvgIcon';
import '@mui/material/Typography';
import '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    cta: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    button: true;
    buttonFilled: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    smallest: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsSizeOverrides {
    smallest: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    helper: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    dialog: true;
  }
}
