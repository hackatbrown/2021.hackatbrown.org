import pawLogo from "../../../../assets/images/LandingPage/Hack@Brown.png";
import bluepaw from "../../../../assets/images/VirtualSpace/bluepaw.png";
import cardtower from "../../../../assets/images/VirtualSpace/cardtower.png";
import rocketlaunch from "../../../../assets/images/VirtualSpace/rocketlaunch.png";



type InfoContentType = {
    infoType: string,
    description: string,
    logo_asset: string,
    head_color: string,
};


const InfoContents: { [InfoType: string] : InfoContentType; } = {
    "Announcements" : {
        "infoType":"Announcements",
        "description": "Remember to submit your project by 8AM! Use this devpost link!",
        "logo_asset": bluepaw,
        'head_color': '#ED695B',
        },
    "Workshops" : {
        "infoType":"Workshops",
        "description": "",
        "logo_asset": rocketlaunch,
        'head_color': '#A6DCEC',
        },

    "Speaker Series" : {
        "infoType":"Speaker Series",
        "description": "",
        "logo_asset": cardtower,
        'head_color': '#46B5B8',
        },

}

export function getInfoContent(InfoType: string) {
    return InfoContents[InfoType];
}