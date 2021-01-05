import pawLogo from "../../../../assets/images/LandingPage/Hack@Brown.png";
import bluepaw from "../../../../assets/images/VirtualSpace/bluepaw.png";
import cardtower from "../../../../assets/images/VirtualSpace/cardtower.png";
import rocketlaunch from "../../../../assets/images/VirtualSpace/rocketlaunch.png";
import { string } from "prop-types";



type InfoContentType = {
    infoType: string,
    description: string,
    logo_asset: string,
    head_color: string,
    htext_color: string,
};


const InfoContents: { [InfoType: string] : InfoContentType; } = {
    "Announcements" : {
        "infoType":"Announcements",
        "description": "Remember to submit your project by 8am! Use this devpost link",
        "logo_asset": bluepaw,
        'head_color': '#ED695B',
        'htext_color': '#ffffff',
        },
    "Workshops" : {
        "infoType":"Workshops",
        "description": "Remember to submit your project by 9am! Use this devpost link",
        "logo_asset": rocketlaunch,
        'head_color': '#A6DCEC',
        'htext_color': '#444444',
        },

    "Speaker Series" : {
        "infoType":"Speaker Series",
        "description": "Remember to submit your project by 10am! Use this devpost link",
        "logo_asset": cardtower,
        'head_color': '#46B5B8',
        'htext_color': '#ffffff',
        },

}

export function getInfoContent(InfoType: string) {
    return InfoContents[InfoType];
}