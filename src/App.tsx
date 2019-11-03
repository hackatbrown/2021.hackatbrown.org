import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage/SponsorshipPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                        <SponsorshipPage />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
