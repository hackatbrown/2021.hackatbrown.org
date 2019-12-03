import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import EmailPage from "./pages/emailpage/EmailPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ReactGA from "react-ga";

const trackingId = "UA-153759329-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview("/");
ReactGA.set({
    // any data that is relevant to the user session
    // that you would like to track with google analytics
});

const App: React.FC = () => {
    return (
        <Router>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/sponsor">
                    <div className="App">
                        <SponsorshipPage />
                    </div>
                </Route>
                <Route path="/">
                    <div className="App">
                        <div className="App">
                            <LandingPage />
                        </div>
                    </div>
                </Route>
                {/* <Route path="/landingpage">
                    <div className="App">
                        <LandingPage />
                    </div>
                </Route> */}
            </Switch>
        </Router>
    );
};

export default App;
