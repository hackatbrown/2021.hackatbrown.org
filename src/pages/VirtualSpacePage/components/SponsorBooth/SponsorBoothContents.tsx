import bloombergLogo from "../../../../assets/images/LandingPage/companylogo/Bloomberg.png";

type SponsorContentType = {
    description: string,
    url: string,
    tier: string,
    logo_asset: string,
    booth_asset: string,
    gcal_url: string
};

// TODO: New sponsor contents need to be added here.
const sponsorContents: { [sponsorName: string] : SponsorContentType; } = {
    "bloomberg" : {
        "description": "Bloomberg is a social media company lorem ipsum",
        "url": "url",
        "tier": "kilo",
        "logo_asset": bloombergLogo,
        "booth_asset": "",
        "gcal_url": "https://calendar.google.com/calendar/embed?height=312&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;mode=WEEK&amp;showPrint=0&amp;showTabs=1"
    },
}

export function getSponsorContent(sponsorName: string) {
    return sponsorContents[sponsorName];
}
