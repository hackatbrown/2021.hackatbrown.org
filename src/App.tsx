import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmailPage from "./pages/EmailPage/EmailPage";

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
                    <div className="App">
                        <RegistrationPage />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
