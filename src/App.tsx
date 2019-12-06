import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
// import EmailPage from "./pages/emailpage/EmailPage";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmailPage from "./pages/EmailPage/EmailPage";
import Toolbar from "./components/Toolbar/Toolbar";
import Dashboard from "./pages/DashboardPage/DashboardHome";
import "bootstrap-css-only/css/bootstrap.min.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { FirebaseContextConsumer } from "./components/Firebase/context";
import { Redirect } from "react-router-dom";
import Firebase from "./components/Firebase";

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
                    color: "#FFFFFF"
                },
                color: "white" // if you also want to change the color of the input, this is the prop you'd use
            },
            underline: {
                "&:before": {
                    borderBottom: "1px solid #FFFFFF"
                }
            }
        },
        MuiOutlinedInput: {
            multiline: {
                border: "1px solid #FFFFFF"
            }
        }
    },
    typography: {
        fontFamily: ["Akkurat Pro"].join(",")
    }
});

const apiURL: string = "https://api2020-staging.herokuapp.com";

/**
 * define a type model for the props you are passing in to the component
 */
type AppProps = {
    firebase: Firebase | null;
};

/**
 * define a type model for the state of the page
 */
type AppState = {
    user: any;
};

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            user: null
        };
    }

    // Check if user is logged in when component mounts
    componentDidMount = () => {
        let currFirebase = this.props.firebase;
        if (currFirebase == null) {
            // if true, error
        } else {
            currFirebase.doAuthListener(this); // check if user is logged in or not
        }
    };

    render() {
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
                    {this.state.user && (
                        <Route path="/registration">
                            <ThemeProvider theme={theme}>
                                <div className="App">
                                    {/* <Toolbar backgroundColor={"#4F5C6B"}/> */}
                                    <FirebaseContextConsumer>
                                        {firebase => (
                                            <Toolbar
                                                firebase={
                                                    firebase == null
                                                        ? null
                                                        : firebase.firebase
                                                }
                                                backgroundColor={"#4F5C6B"}
                                            />
                                        )}
                                    </FirebaseContextConsumer>
                                    <FirebaseContextConsumer>
                                        {firebase => (
                                            <RegistrationPage
                                                firebase={
                                                    firebase == null
                                                        ? null
                                                        : firebase.firebase
                                                }
                                                apiURL={apiURL}
                                            />
                                        )}
                                    </FirebaseContextConsumer>
                                </div>
                            </ThemeProvider>
                        </Route>
                    )}
                    {this.state.user && (
                        <Route path="/dashboard">
                            <div className="App">
                                {/* <Toolbar backgroundColor={"#008D8A"}/> */}
                                <FirebaseContextConsumer>
                                    {firebase => (
                                        <Toolbar
                                            firebase={
                                                firebase == null
                                                    ? null
                                                    : firebase.firebase
                                            }
                                            backgroundColor={"#1A9996"}
                                        />
                                    )}
                                </FirebaseContextConsumer>
                                <FirebaseContextConsumer>
                                    {firebase => (
                                        <Dashboard
                                            firebase={
                                                firebase == null
                                                    ? null
                                                    : firebase.firebase
                                            }
                                            apiURL={apiURL}
                                        />
                                    )}
                                </FirebaseContextConsumer>
                            </div>
                        </Route>
                    )}
                    <Route path="">
                        <div className="App">
                            <div className="App">
                                <LandingPage apiURL={apiURL} />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

// old version

// const App: React.FC = () => {
//     return (
//         <Router history={history}>
//             {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//             <Switch>
//                 <Route path="/sponsor">
//                     <div className="App">
//                         <SponsorshipPage />
//                     </div>
//                 </Route>
//                 <Route path="/registration">
// <ThemeProvider theme={theme}>
//   <div className="App">
//       {/* <Toolbar backgroundColor={"#4F5C6B"}/> */}
//       <FirebaseContextConsumer>
//           {firebase => <Toolbar firebase={(firebase == null) ? null : firebase.firebase} backgroundColor={"#4F5C6B"}/>}
//       </FirebaseContextConsumer>
//       <FirebaseContextConsumer>
//       {
//           firebase => <RegistrationPage firebase={(firebase == null) ? null : firebase.firebase} apiURL={apiURL}/>
//       }
//       </FirebaseContextConsumer>
//   </div>
// </ThemeProvider>
//                 </Route>
//                 <Route path="/dashboard">
// <div className="App">
//   {/* <Toolbar backgroundColor={"#008D8A"}/> */}
//   <FirebaseContextConsumer>
//       {firebase => <Toolbar firebase={(firebase == null) ? null : firebase.firebase} backgroundColor={"#1A9996"}/>}
//   </FirebaseContextConsumer>
//   <FirebaseContextConsumer>
//   {
//       firebase => <Dashboard firebase={(firebase == null) ? null : firebase.firebase} apiURL={apiURL} />
//   }
//   </FirebaseContextConsumer>
// </div>
//                 </Route>
//                 <Route path="/">
//                     <div className="App">
//                         <div className="App">
//                             <LandingPage apiURL={apiURL}/>
//                         </div>
//                     </div>
//                 </Route>
//             </Switch>
//         </Router>
//     );
// };

// export default App;
