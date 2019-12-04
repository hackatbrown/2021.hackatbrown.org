import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailPage from "./pages/EmailPage/EmailPage";
import Toolbar from './components/Toolbar/Toolbar';
import Dashboard from './pages/DashboardPage/DashboardHome';
import "bootstrap-css-only/css/bootstrap.min.css";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { FirebaseContextConsumer } from './components/Firebase/context'

import LoginJoin from './pages/LoginJoin/LoginJoin';

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

const apiURL : string = "https://api2020-staging.herokuapp.com";

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
                <Route path="/dashboard">
                  <div className="App">
                    <Toolbar backgroundColor={"#008D8A"}/>
                    
                    <FirebaseContextConsumer>
                        {firebase => <Dashboard firebase={(firebase == null) ? null : firebase.firebase} apiURL={apiURL} />}
                    </FirebaseContextConsumer>
                  </div>
                </Route>
                <Route>
                  {/* Temp log in for testing dashboard */}
                  <div className="App">   
                    <FirebaseContextConsumer>
                        {firebase => <LoginJoin firebase={(firebase == null) ? null : firebase.firebase} />}
                    </FirebaseContextConsumer>
                  </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
