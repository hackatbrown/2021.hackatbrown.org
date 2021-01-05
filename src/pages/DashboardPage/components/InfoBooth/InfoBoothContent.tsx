import pawLogo from "../../../../assets/images/LandingPage/Hack@Brown.png";
import bluepaw from "../../../../assets/images/VirtualSpace/bluepaw.png";
import cardtower from "../../../../assets/images/VirtualSpace/cardtower.png";
import rocketlaunch from "../../../../assets/images/VirtualSpace/rocketlaunch.png";
import { string } from "prop-types";



type InfoContentType = {
    logo_asset: string,
    head_color: string,
    htext_color: string,
};


const InfoContents: { [InfoType: string] : InfoContentType; } = {
    "Announcements" : {
        "logo_asset": bluepaw,
        'head_color': '#ED695B',
        'htext_color': '#ffffff',
        },
    "Workshops" : {
        "logo_asset": rocketlaunch,
        'head_color': '#A6DCEC',
        'htext_color': '#444444',
        },

    "Speaker Series" : {
        "logo_asset": cardtower,
        'head_color': '#46B5B8',
        'htext_color': '#ffffff',
        },

}

export function getInfoContent(InfoType: string) {
    return InfoContents[InfoType];
}