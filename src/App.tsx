import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import EmailPage from "./pages/EmailPage/EmailPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Toolbar from './components/Toolbar/Toolbar';

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
                <Route path="/">
                    <div className="App">
                        <Toolbar backgroundColor={"#000000"}/>
                        <LandingPage />
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
