import React from "react"
import FAQ from "../LandingPage/LandingPageComponents/FAQ/FAQ";
import Intro from "../LandingPage/LandingPageComponents/Intro/Intro";
import Itinerary from "../LandingPage/LandingPageComponents/Itinerary/Itinerary";
import Main from "../HardwarePage/components/Main"
import Sponsors from "../LandingPage/LandingPageComponents/Sponsors/Sponsors";
import Footer from "../LandingPage/LandingPageComponents/Footer/Footer";
import Toolbar from "../../components/Toolbar/Toolbar";
import "../HardwarePage/HardwarePage.css"
import { FirebaseContextConsumer } from "../../components/Firebase/context";

type HardwarePageProps = {
    apiURL : string
  };
  
type HardwarePageState = {
    toolbarVisible : boolean
  };
export default class HardwarePage extends React.Component<
  HardwarePageProps,
  HardwarePageState
>
 {
    constructor(props: HardwarePageProps){
        super(props)
        this.state={
            toolbarVisible: true
        }
    }
    hideToolbar = (display: boolean) => {
        this.setState({
          toolbarVisible : display
        });
      }
    render(){
        return(
            <div >
                <div className ="hardware-pg">
                <FirebaseContextConsumer>
                    {firebase => (
                        <Toolbar
                            firebase={firebase == null ? null : firebase.firebase}
                            backgroundColor={"#415364"}
                        />
                    )}
                </FirebaseContextConsumer>
                
                <div id="main">
                    <Main />
                </div>
                </div>
                <div id ="footer">
                        <Footer/>
                </div>
            </div>

        )
    }
}