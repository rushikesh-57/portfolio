// ThemeContext.jsx
import React, { createContext, useMemo, useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "../theme"; // <-- import the function

const ColorModeContext = createContext();
export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark"); // default dark mode

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]); // use updated theme

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
