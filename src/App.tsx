import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
// import EmailPage from "./pages/emailpage/EmailPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

const history = createBrowserHistory();

const trackingId = "UA-153759329-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview("/");
// Initialize google analytics page view tracking
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
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
