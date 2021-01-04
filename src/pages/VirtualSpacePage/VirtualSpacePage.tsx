import React from "react";
import "./VirtualSpacePage.css";
import VirtualSpaceWindow from "./components/VirtualSpaceWindow/VirtualSpaceWindow";
import Footer from "../LandingPage/LandingPageComponents/Footer/Footer";
import Toolbar from "../../components/Toolbar/Toolbar";
import { FirebaseContextConsumer } from "../../components/Firebase/context";

type VirtualSpacePageProps = {
    apiURL : string
};

type VirtualSpacePageState = {
    toolbarVisible : boolean
};

export default class VirtualSpacePage extends React.Component<
    VirtualSpacePageProps,
    VirtualSpacePageState
> {
    constructor(props: VirtualSpacePageProps) {
        super(props);
        this.state = {
          toolbarVisible : true,
        };
    }

    hideToolbar = (display: boolean) => {
      this.setState({
        toolbarVisible : display
      });
    }

    render() {
        return (
            <div className="virtualSpace">
                <FirebaseContextConsumer>
                   {firebase => (
                        <Toolbar
                            firebase={firebase == null ? null : firebase.firebase}
                            backgroundColor={"#FDF7DC"}
                            apiURL={this.props.apiURL}
                            hideToolbar={this.hideToolbar}
                         />
                     )}
                </FirebaseContextConsumer>
                <div>
                    <VirtualSpaceWindow />
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}
