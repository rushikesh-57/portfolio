import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#13131A',   // Page background
      paper: '#1E1E28',     // Slightly darker for cards (better contrast than #252533)
    },
    primary: {
      main: '#00b4d8',      // Bright teal (used for highlights, buttons)
    },
    secondary: {
      main: '#00ffc3',      // Aqua green (used for accents, hover effects)
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
    },
    divider: 'rgba(255,255,255,0.1)', // for subtle card borders or underlines
  },
  typography: {
    fontFamily: ['Roboto', 'Poppins', 'sans-serif'].join(','),
    h1: { fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2.4rem' },
    h2: { fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.8rem' },
    h5: { fontWeight: 700 }, // for section titles (Experience/Education)
    subtitle1: { fontWeight: 600 }, // job titles, card headings
    body1: { fontSize: '0.95rem' }, // general paragraph text
    body2: { fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }, // descriptions, list text
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.04)',
          borderRadius: 12,
          transition: '0.3s',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.07)' },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
})

export default theme
