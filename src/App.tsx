import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
// import EmailPage from "./pages/emailpage/EmailPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import { Router, Switch, Route } from "react-router-dom";
import EmailPage from "./pages/EmailPage/EmailPage";
import Toolbar from './components/Toolbar/Toolbar';
import Dashboard from './pages/DashboardPage/DashboardHome';
import "bootstrap-css-only/css/bootstrap.min.css";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const history = createBrowserHistory();

const trackingId = "UA-153759329-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview("/");
// Initialize google analytics page view tracking
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
        <Router history={history}>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/sponsor">
                    <div className="App">
                        <SponsorshipPage />
                    </div>
                </Route>
                <Route path="/registration">
                    <ThemeProvider theme={theme}>
                      <div className="App">
                          <RegistrationPage />
                      </div>
                    </ThemeProvider>
                </Route>
                <Route path="/dashboard">
                  <div className="App">
                    <Dashboard />
                  </div>
                </Route>
                <Route path="/">
                    <div className="App">
                        <LandingPage />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
