import {useMemo} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { deepOrange, amber } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    CountChipLabel: React.CSSProperties;
    DialogModalTitle: React.CSSProperties;
    LayerModalTitle: React.CSSProperties;
    ProgramVisualCoverTitle: React.CSSProperties;
    ProgramVisualCoverDescription: React.CSSProperties;
    ProgramSummaryListItemTitle: React.CSSProperties;
    ProgramSummaryListItemData: React.CSSProperties;
    ProgramGridItemHeader: React.CSSProperties;
    ProgramListItemTitle: React.CSSProperties;
    ProgramLectureListItemTitle: React.CSSProperties;
    ProgramLectureListItemCompleted: React.CSSProperties;
    ClipSecondsCurrent: React.CSSProperties;
    ClipSecondsCurrentVertical: React.CSSProperties;
    ClipSecondsTotal: React.CSSProperties;
    ClipSecondsTotalVertical: React.CSSProperties;
    ClipControllerTitle: React.CSSProperties;
    ClipControllerSeekButtonTitle: React.CSSProperties;
    ClipPlayerInfoCircleValue: React.CSSProperties;
    ClipPlayerInfoCircleValueVertical: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    CountChipLabel?: React.CSSProperties;
    DialogModalTitle: React.CSSProperties;
    LayerModalTitle: React.CSSProperties;
    ProgramVisualCoverTitle?: React.CSSProperties;
    ProgramVisualCoverDescription: React.CSSProperties;
    ProgramSummaryListItemTitle?: React.CSSProperties;
    ProgramSummaryListItemData?: React.CSSProperties;
    ProgramGridItemHeader?: React.CSSProperties;
    ProgramListItemTitle: React.CSSProperties;
    ProgramLectureListItemTitle: React.CSSProperties;
    ProgramLectureListItemCompleted: React.CSSProperties;
    ClipSecondsCurrent: React.CSSProperties;
    ClipSecondsCurrentVertical: React.CSSProperties;
    ClipSecondsTotal: React.CSSProperties;
    ClipSecondsTotalVertical: React.CSSProperties;
    ClipControllerTitle: React.CSSProperties;
    ClipControllerSeekButtonTitle: React.CSSProperties;
    ClipPlayerInfoCircleValue: React.CSSProperties;
    ClipPlayerInfoCircleValueVertical: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    CountChipLabel: true;
    DialogModalTitle: true;
    LayerModalTitle: true;
    ProgramVisualCoverTitle: true;
    ProgramVisualCoverDescription: true;
    ProgramSummaryListItemTitle: true;
    ProgramSummaryListItemData: true;
    ProgramGridItemHeader: true;
    ProgramListItemTitle: true;
    ProgramLectureListItemTitle: true;
    ProgramLectureListItemCompleted: true;
    ClipSecondsCurrent: true;
    ClipSecondsCurrentVertical: true;
    ClipSecondsTotal: true;
    ClipSecondsTotalVertical: true;
    ClipControllerTitle: true;
    ClipControllerSeekButtonTitle: true;
    ClipPlayerInfoCircleValue: true;
    ClipPlayerInfoCircleValueVertical: true;
  }
}
// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
export const theme = createTheme({
  palette: {
    // mode: prefersDarkMode ? "dark" : "light",
    mode: 'dark',
    primary: deepOrange,
    secondary: amber,
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    CountChipLabel: {
      fontSize: 13,
      lineHeight: '16px',
      fontWeight: 400,
      color: 'rgba(255,255,255,1)',
      letterSpacing: -0.4,
      padding: 2,
    },
    DialogModalTitle: {
      fontSize: 15,
      lineHeight: '20px',
      fontWeight: 400,
      letterSpacing: -0.4,
      textAlign: 'center',
    },
    LayerModalTitle: {
      fontSize: 21,
      lineHeight: '28px',
      fontWeight: 700,
      letterSpacing: -0.4,
      textAlign: 'center',
    },
    ProgramVisualCoverTitle: {
      display: 'block',
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 700,
      color: 'rgba(255,255,255,1)',
      letterSpacing: -0.4,
      marginTop: 4,
    },
    ProgramVisualCoverDescription: {
      display: 'block',
      fontSize: 15,
      lineHeight: '20px',
      fontWeight: 400,
      color: 'rgba(255,255,255,1)',
      letterSpacing: -0.4,
      marginTop: 4,
    },
    ProgramSummaryListItemTitle: {
      display: 'block',
      fontSize: 15,
      lineHeight: '20px',
      fontWeight: 700,
      color: 'rgba(255,255,255,0.3)',
      letterSpacing: -0.4,
      marginBottom: 4,
    },
    ProgramSummaryListItemData: {
      display: 'block',
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 700,
      color: 'rgba(255,255,255,1)',
      letterSpacing: -0.4,
      marginBottom: 8,
    },
    ProgramGridItemHeader: {
      display: 'block',
      fontSize: 15,
      lineHeight: '20px',
      fontWeight: 700,
      color: 'rgba(255,255,255,0.3)',
      letterSpacing: -0.4,
    },
    ProgramListItemTitle: {
      display: 'block',
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 700,
      color: 'rgba(255,255,255,1)',
      letterSpacing: -0.4,
    },
    ProgramLectureListItemTitle: {
      flex: 1,
      display: 'block',
      fontSize: 13,
      lineHeight: '16px',
      fontWeight: 400,
      color: 'rgba(255,255,255,1)',
      letterSpacing: -0.4,
      marginLeft: 8,
      marginRight: 8,
    },
    ProgramLectureListItemCompleted: {
      fontSize: 11,
      lineHeight: '14px',
      fontWeight: 700,
      color: '#ffeb3b',
      letterSpacing: -0.4,
      padding: 2,
    },
    ClipSecondsCurrent: {
      fontSize: 29,
      lineHeight: '36px',
      fontWeight: 700,
      letterSpacing: -0.4,
      paddingTop: 4,
      marginRight: 4,
    },
    ClipSecondsCurrentVertical: {
      fontSize: 25,
      lineHeight: '32px',
      fontWeight: 700,
      letterSpacing: -0.4,
      paddingTop: 4,
      marginRight: 4,
    },
    ClipSecondsTotal: {
      fontSize: 15,
      lineHeight: '20px',
      fontWeight: 400,
      letterSpacing: -0.4,
      paddingTop: 4,
      paddingBottom: 4,
    },
    ClipSecondsTotalVertical: {
      fontSize: 13,
      lineHeight: '16px',
      fontWeight: 400,
      letterSpacing: -0.4,
      paddingTop: 4,
      paddingBottom: 4,
    },
    ClipControllerTitle: {
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 400,
      letterSpacing: -0.4,
      marginBottom: 4,
    },
    ClipControllerSeekButtonTitle: {
      fontSize: 21,
      lineHeight: '28px',
      fontWeight: 700,
      letterSpacing: -0.4,
    },
    ClipPlayerInfoCircleValue: {
      fontSize: 21,
      lineHeight: '64px',
      fontWeight: 700,
      letterSpacing: -0.4,
    },
    ClipPlayerInfoCircleValueVertical: {
      fontSize: 15,
      lineHeight: '40px',
      fontWeight: 700,
      letterSpacing: -0.4,
    },
    h4: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 700,
    },
    h5: {
      fontSize: 21,
      lineHeight: '24px',
      fontWeight: 700,
    },
    h6: {
      fontSize: 17,
      lineHeight: '24px',
      fontWeight: 700,
    },
    body1: {
      fontSize: 15,
      lineHeight: '20px',
      fontWeight: 400,
      letterSpacing: -0.4,
    },
    body2: {
      fontSize: 13,
      lineHeight: '16px',
      fontWeight: 400,
      letterSpacing: -0.4,
    },
    caption: {
      fontSize: 11,
      lineHeight: '14px',
      fontWeight: 700,
      letterSpacing: -0.4,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 9999,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          outline: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          // minHeight: 48,
          backgroundColor: '#121212',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          letterSpacing: '-0.4px'
        },
      },
    },
  },
});

// import { useMemo } from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { PaletteMode } from '@mui/material';
// import { deepOrange, grey } from '@mui/material/colors';
// import { deepmerge } from '@mui/utils';

// declare module '@mui/material/styles' {
//   interface TypographyVariants {
//     CountChipLabel: React.CSSProperties;
//     DialogModalTitle: React.CSSProperties;
//     LayerModalTitle: React.CSSProperties;
//     ProgramVisualCoverTitle: React.CSSProperties;
//     ProgramVisualCoverDescription: React.CSSProperties;
//     ProgramSummaryListItemTitle: React.CSSProperties;
//     ProgramSummaryListItemData: React.CSSProperties;
//     ProgramGridItemHeader: React.CSSProperties;
//     ProgramListItemTitle: React.CSSProperties;
//     ProgramLectureListItemTitle: React.CSSProperties;
//     ProgramLectureListItemCompleted: React.CSSProperties;
//     ClipSecondsCurrent: React.CSSProperties;
//     ClipSecondsCurrentVertical: React.CSSProperties;
//     ClipSecondsTotal: React.CSSProperties;
//     ClipSecondsTotalVertical: React.CSSProperties;
//     ClipControllerTitle: React.CSSProperties;
//     ClipControllerSeekButtonTitle: React.CSSProperties;
//     ClipPlayerInfoCircleValue: React.CSSProperties;
//     ClipPlayerInfoCircleValueVertical: React.CSSProperties;
//   }

//   // allow configuration using `createTheme`
//   interface TypographyVariantsOptions {
//     CountChipLabel?: React.CSSProperties;
//     DialogModalTitle: React.CSSProperties;
//     LayerModalTitle: React.CSSProperties;
//     ProgramVisualCoverTitle?: React.CSSProperties;
//     ProgramVisualCoverDescription: React.CSSProperties;
//     ProgramSummaryListItemTitle?: React.CSSProperties;
//     ProgramSummaryListItemData?: React.CSSProperties;
//     ProgramGridItemHeader?: React.CSSProperties;
//     ProgramListItemTitle: React.CSSProperties;
//     ProgramLectureListItemTitle: React.CSSProperties;
//     ProgramLectureListItemCompleted: React.CSSProperties;
//     ClipSecondsCurrent: React.CSSProperties;
//     ClipSecondsCurrentVertical: React.CSSProperties;
//     ClipSecondsTotal: React.CSSProperties;
//     ClipSecondsTotalVertical: React.CSSProperties;
//     ClipControllerTitle: React.CSSProperties;
//     ClipControllerSeekButtonTitle: React.CSSProperties;
//     ClipPlayerInfoCircleValue: React.CSSProperties;
//     ClipPlayerInfoCircleValueVertical: React.CSSProperties;
//   }
// }

// // Update the Typography's variant prop options
// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     CountChipLabel: true;
//     DialogModalTitle: true;
//     LayerModalTitle: true;
//     ProgramVisualCoverTitle: true;
//     ProgramVisualCoverDescription: true;
//     ProgramSummaryListItemTitle: true;
//     ProgramSummaryListItemData: true;
//     ProgramGridItemHeader: true;
//     ProgramListItemTitle: true;
//     ProgramLectureListItemTitle: true;
//     ProgramLectureListItemCompleted: true;
//     ClipSecondsCurrent: true;
//     ClipSecondsCurrentVertical: true;
//     ClipSecondsTotal: true;
//     ClipSecondsTotalVertical: true;
//     ClipControllerTitle: true;
//     ClipControllerSeekButtonTitle: true;
//     ClipPlayerInfoCircleValue: true;
//     ClipPlayerInfoCircleValueVertical: true;
//   }
// }
// export const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           // palette values for light mode
//           // primary: amber,
//           // divider: amber[200],
//           // text: {
//           //   primary: grey[900],
//           //   secondary: grey[800],
//           // },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[500],
//           },
//         }),
//   },
// });

// // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
// export const getThemedComponents = (theme: any) =>
//   createTheme({
//     typography: {
//       CountChipLabel: {
//         fontSize: 13,
//         lineHeight: '16px',
//         fontWeight: 400,
//         color: 'rgba(255,255,255,1)',
//         letterSpacing: -0.4,
//         padding: 2,
//       },
//       DialogModalTitle: {
//         fontSize: 15,
//         lineHeight: '20px',
//         fontWeight: 400,
//         letterSpacing: -0.4,
//         textAlign: 'center',
//       },
//       LayerModalTitle: {
//         fontSize: 21,
//         lineHeight: '28px',
//         fontWeight: 700,
//         letterSpacing: -0.4,
//         textAlign: 'center',
//       },
//       ProgramVisualCoverTitle: {
//         display: 'block',
//         fontSize: 24,
//         lineHeight: '32px',
//         fontWeight: 700,
//         color: 'rgba(255,255,255,1)',
//         letterSpacing: -0.4,
//         marginTop: 4,
//       },
//       ProgramVisualCoverDescription: {
//         display: 'block',
//         fontSize: 15,
//         lineHeight: '20px',
//         fontWeight: 400,
//         color: 'rgba(255,255,255,1)',
//         letterSpacing: -0.4,
//         marginTop: 4,
//       },
//       ProgramSummaryListItemTitle: {
//         display: 'block',
//         fontSize: 15,
//         lineHeight: '20px',
//         fontWeight: 700,
//         color: 'rgba(255,255,255,0.3)',
//         letterSpacing: -0.4,
//         marginBottom: 4,
//       },
//       ProgramSummaryListItemData: {
//         display: 'block',
//         fontSize: 17,
//         lineHeight: '24px',
//         fontWeight: 700,
//         color: 'rgba(255,255,255,1)',
//         letterSpacing: -0.4,
//         marginBottom: 8,
//       },
//       ProgramGridItemHeader: {
//         display: 'block',
//         fontSize: 15,
//         lineHeight: '20px',
//         fontWeight: 700,
//         color: 'rgba(255,255,255,0.3)',
//         letterSpacing: -0.4,
//       },
//       ProgramListItemTitle: {
//         display: 'block',
//         fontSize: 17,
//         lineHeight: '24px',
//         fontWeight: 700,
//         color: 'rgba(255,255,255,1)',
//         letterSpacing: -0.4,
//       },
//       ProgramLectureListItemTitle: {
//         flex: 1,
//         display: 'block',
//         fontSize: 13,
//         lineHeight: '16px',
//         fontWeight: 400,
//         color: 'rgba(255,255,255,1)',
//         letterSpacing: -0.4,
//         marginLeft: 8,
//         marginRight: 8,
//       },
//       ProgramLectureListItemCompleted: {
//         fontSize: 11,
//         lineHeight: '14px',
//         fontWeight: 700,
//         color: '#ffeb3b',
//         letterSpacing: -0.4,
//         padding: 2,
//       },
//       ClipSecondsCurrent: {
//         fontSize: 29,
//         lineHeight: '36px',
//         fontWeight: 700,
//         letterSpacing: -0.4,
//         paddingTop: 4,
//         marginRight: 4,
//       },
//       ClipSecondsCurrentVertical: {
//         fontSize: 25,
//         lineHeight: '32px',
//         fontWeight: 700,
//         letterSpacing: -0.4,
//         paddingTop: 4,
//         marginRight: 4,
//       },
//       ClipSecondsTotal: {
//         fontSize: 15,
//         lineHeight: '20px',
//         fontWeight: 400,
//         letterSpacing: -0.4,
//         paddingTop: 4,
//         paddingBottom: 4,
//       },
//       ClipSecondsTotalVertical: {
//         fontSize: 13,
//         lineHeight: '16px',
//         fontWeight: 400,
//         letterSpacing: -0.4,
//         paddingTop: 4,
//         paddingBottom: 4,
//       },
//       ClipControllerTitle: {
//         fontSize: 17,
//         lineHeight: '24px',
//         fontWeight: 400,
//         letterSpacing: -0.4,
//         marginBottom: 4,
//       },
//       ClipControllerSeekButtonTitle: {
//         fontSize: 21,
//         lineHeight: '28px',
//         fontWeight: 700,
//         letterSpacing: -0.4,
//       },
//       ClipPlayerInfoCircleValue: {
//         fontSize: 21,
//         lineHeight: '64px',
//         fontWeight: 700,
//         letterSpacing: -0.4,
//       },
//       ClipPlayerInfoCircleValueVertical: {
//         fontSize: 15,
//         lineHeight: '40px',
//         fontWeight: 700,
//         letterSpacing: -0.4,
//       },
//       h4: {
//         fontSize: 24,
//         lineHeight: '32px',
//         fontWeight: 700,
//       },
//       h5: {
//         fontSize: 21,
//         lineHeight: '24px',
//         fontWeight: 700,
//       },
//       h6: {
//         fontSize: 17,
//         lineHeight: '24px',
//         fontWeight: 700,
//       },
//       body1: {
//         fontSize: 15,
//         lineHeight: '20px',
//         fontWeight: 400,
//         letterSpacing: -0.4,
//       },
//       body2: {
//         fontSize: 13,
//         lineHeight: '16px',
//         fontWeight: 400,
//         letterSpacing: -0.4,
//       },
//       caption: {
//         fontSize: 11,
//         lineHeight: '14px',
//         fontWeight: 700,
//         letterSpacing: -0.4,
//       },
//     },
//     components: {
//       MuiAppBar: {
//         styleOverrides: {
//           root: {
//             zIndex: 9999,
//           },
//         },
//       },
//       MuiPaper: {
//         styleOverrides: {
//           root: {
//             outline: 'none',
//           },
//         },
//       },
//       MuiToolbar: {
//         styleOverrides: {
//           root: {
//             // minHeight: 48,
//             backgroundColor: '#121212',
//           },
//         },
//       },
//       MuiBottomNavigation: {
//         styleOverrides: {
//           root: {
//             backgroundColor: 'transparent',
//           },
//         },
//       },
//       MuiBottomNavigationAction: {
//         styleOverrides: {
//           root: {
//             backgroundColor: 'transparent',
//           },
//         },
//       },
//     },
//   });

// const darkTheme = createTheme(getDesignTokens('dark'));
// export const brandingDarkTheme = deepmerge(darkTheme, getThemedComponents(darkTheme));
