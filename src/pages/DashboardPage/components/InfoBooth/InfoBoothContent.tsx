import pawLogo from "../../../../assets/images/LandingPage/Hack@Brown.png";


type InfoContentType = {
    infoType: string,
    description: string,
    logo_asset: string,
};


const InfoContents: { [InfoType: string] : InfoContentType; } = {
    "Announcements" : {
        "infoType":"Announcements",
        "description": "Remember to submit your project by 8am! Use this devpost link",
        "logo_asset": pawLogo,
        },
    "Workshops" : {
        "infoType":"Workshops",
        "description": "Remember to submit your project by 9am! Use this devpost link",
        "logo_asset": pawLogo,
        },

    "Speaker Series" : {
        "infoType":"Speaker Series",
        "description": "Remember to submit your project by 10am! Use this devpost link",
        "logo_asset": pawLogo,
        },

}

export function getInfoContent(InfoType: string) {
    return InfoContents[InfoType];
}