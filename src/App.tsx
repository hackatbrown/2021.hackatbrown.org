import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import EmailPage from "./pages/EmailPage/EmailPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Toolbar from './components/Toolbar/Toolbar';
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import EmailPage from "./pages/emailpage/EmailPage";
import LandingPage from "./pages/LandingPage/LandingPage";
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817

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
<<<<<<< HEAD
                        <Toolbar backgroundColor={"#000000"}/>
=======
>>>>>>> 1d54320d6a14a43398d774cfd2fa8794d7c9f817
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
