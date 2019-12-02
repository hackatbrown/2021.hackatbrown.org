import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailPage from "./pages/EmailPage/EmailPage";
import Toolbar from './components/Toolbar/Toolbar';
import "bootstrap-css-only/css/bootstrap.min.css";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          color: '#FFFFFF'
        },
      color: "white", // if you also want to change the color of the input, this is the prop you'd use
      },
      underline: {
        "&:before": {
          borderBottom: '1px solid #FFFFFF'
        },
      }
    },
    MuiOutlinedInput: {
      multiline: {
        border: '1px solid #FFFFFF'
      }
    }
  },
  typography: {
    fontFamily: [
      'Akkurat Pro'
    ].join(','),
  }
});

const App: React.FC = () => {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/sponsors">
                    <div className="App">
                        <SponsorshipPage />
                    </div>
                </Route>
                <Route path="/emails">
                    <div className="App">
                        <EmailPage />
                    </div>
                </Route>
                <Route path="/registration">
                    <ThemeProvider theme={theme}>
                      <div className="App">
                          <Toolbar backgroundColor={"#4F5C6B"}/>
                          <RegistrationPage />
                      </div>
                    </ThemeProvider>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
