import React from 'react';
import FormConfirmation from "./components/FormConfirmation";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';

function App(props: any) {
  const {primaryColor} = props;

  const palette: any = {
    primary: blue,
    contrastText: "#fff"
  };

  if (primaryColor) {
    palette['primary']['main'] = '#' + primaryColor
  }

  const theme = createMuiTheme({
    palette: palette,
  });

  return (
    <ThemeProvider theme={theme}>
      <FormConfirmation/>
    </ThemeProvider>
  );
}

export default App;
