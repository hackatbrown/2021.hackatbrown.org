import React from "react";
import "./App.css";
import SponsorshipPage from "./pages/SponsorshipPage/SponsorshipPage";

const App: React.FC = () => {
    return (
        <div className="App">
            <SponsorshipPage msg="this is how to use props in typescript" />
        </div>
    );
};

export default App;
