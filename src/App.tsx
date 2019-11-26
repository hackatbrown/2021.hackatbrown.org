import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmailPage from "./pages/EmailPage/EmailPage";
import Toolbar from './components/Toolbar/Toolbar';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

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
                        <Toolbar backgroundColor={"#4F5C6B"}/>
                        <RegistrationPage />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
