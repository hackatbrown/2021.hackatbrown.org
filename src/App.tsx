import React from "react";
import "./App.css";
import DayOfPage from "./pages/DayOfPage/DayOfPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Toolbar from "./components/Toolbar/Toolbar";
import Dashboard from "./pages/DashboardPage/DashboardHome";
import "bootstrap-css-only/css/bootstrap.min.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { FirebaseContextConsumer } from "./components/Firebase/context";
import Firebase from "./components/Firebase";
import CodeOfConductPage from "./pages/CodeOfConductPage/CodeOfConductPage";
import HardwarePage from "./pages/HardwarePage/HardwarePage"
import VirtualSpacePage from "./pages/VirtualSpacePage/VirtualSpacePage";

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

let apiURL: string;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // dev
    apiURL = "https://api2020-staging.herokuapp.com";
    console.log(`apiUrl: ${apiURL}`);
} else {
    // prod
    apiURL = "https://api2020-hackatbrown.herokuapp.com";
}

//   ___   .__   __.  ___________    __    ____      ______   ______    _______   _______    ___
//  /  /   |  \ |  | |   ____\   \  /  \  /   /     /      | /  __  \  |       \ |   ____|   \  \
// /  /    |   \|  | |  |__   \   \/    \/   /     |  ,----'|  |  |  | |  .--.  ||  |__       \  \
//<  <     |  . `  | |   __|   \            /      |  |     |  |  |  | |  |  |  ||   __|       >  >
// \  \    |  |\   | |  |____   \    /\    /       |  `----.|  `--'  | |  '--'  ||  |____     /  /
//  \__\   |__| \__| |_______|   \__/  \__/         \______| \______/  |_______/ |_______|   /__/

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
    userToken: any;
};

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            user: null,
            userToken: null
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
                                                backgroundColor={"#211959"}
                                                hideToolbar={null}
                                                apiURL={apiURL}
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
                                            backgroundColor={"#A6DCEC"}
                                            hideToolbar={null}
                                            apiURL={apiURL}
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
                    <Route path="/get-hacker-data">
                        {() => {
                            this.props.firebase.doAuthListener(this);
                            window.location.href =
                                apiURL +
                                "/download_hackers?fire_token=" +
                                this.state.userToken;
                        }}
                    </Route>
                    <Route path="/day-of">
                        <div className="App">
                            <DayOfPage />
                        </div>
                    </Route>
                    <Route path="/code-of-conduct">
                        <div className="App">
                            <CodeOfConductPage />
                        </div>
                    </Route>
                    {/* <Route path="/hardware">
                        <div className="App">
                            <HardwarePage apiURL={apiURL} />

                        </div>
                    </Route> */}
                    <Route path="/virtual-space">
                    <div className="App">
                            <VirtualSpacePage apiURL={apiURL} />
                        </div>
                    </Route>
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

//   ___     ___   .__   __.  ___________    __    ____      ______   ______    _______   _______    ___
//  /  /    /  /   |  \ |  | |   ____\   \  /  \  /   /     /      | /  __  \  |       \ |   ____|   \  \
// /  /    /  /    |   \|  | |  |__   \   \/    \/   /     |  ,----'|  |  |  | |  .--.  ||  |__       \  \
//<  <    /  /     |  . `  | |   __|   \            /      |  |     |  |  |  | |  |  |  ||   __|       >  >
// \  \  /  /      |  |\   | |  |____   \    /\    /       |  `----.|  `--'  | |  '--'  ||  |____     /  /
//  \__\/__/       |__| \__| |_______|   \__/  \__/         \______| \______/  |_______/ |_______|   /__/

//   ___     ______    __       _______       ______   ______    _______   _______    ___
//  /  /    /  __  \  |  |     |       \     /      | /  __  \  |       \ |   ____|   \  \
// /  /    |  |  |  | |  |     |  .--.  |   |  ,----'|  |  |  | |  .--.  ||  |__       \  \
//<  <     |  |  |  | |  |     |  |  |  |   |  |     |  |  |  | |  |  |  ||   __|       >  >
// \  \    |  `--'  | |  `----.|  '--'  |   |  `----.|  `--'  | |  '--'  ||  |____     /  /
//  \__\    \______/  |_______||_______/     \______| \______/  |_______/ |_______|   /__/

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

//   ___     ___     ______    __       _______       ______   ______    _______   _______    ___
//  /  /    /  /    /  __  \  |  |     |       \     /      | /  __  \  |       \ |   ____|   \  \
// /  /    /  /    |  |  |  | |  |     |  .--.  |   |  ,----'|  |  |  | |  .--.  ||  |__       \  \
//<  <    /  /     |  |  |  | |  |     |  |  |  |   |  |     |  |  |  | |  |  |  ||   __|       >  >
// \  \  /  /      |  `--'  | |  `----.|  '--'  |   |  `----.|  `--'  | |  '--'  ||  |____     /  /
//  \__\/__/        \______/  |_______||_______/     \______| \______/  |_______/ |_______|   /__/
