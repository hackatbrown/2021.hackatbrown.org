import bloombergLogo from "../../../../assets/images/LandingPage/companylogo/Bloomberg.png";
import neevaLogo from "../../../../assets/images/LandingPage/companylogo/neeva.png";
import wolframLogo from "../../../../assets/images/LandingPage/companylogo/wolfram.png";
import sketchLogo from "../../../../assets/images/LandingPage/companylogo/sketch.png";
import bloombergBoothImg from "../../../../assets/images/VirtualSpace/bloomberg.png";
import neevaBoothImg from "../../../../assets/images/VirtualSpace/neeva.png";
import wolframBoothImg from "../../../../assets/images/VirtualSpace/wolfram.png";
import sketchBoothImg from "../../../../assets/images/VirtualSpace/sketch.png";

type SponsorContentType = {
  description: string;
  url: string;
  tier: string;
  logo_asset: string;
  booth_asset: string;
  gcal_url: string;
};

// TODO: New sponsor contents need to be added here.
const sponsorContents: { [sponsorName: string]: SponsorContentType } = {
  bloomberg: {
    description: "Bloomberg is a social media company lorem ipsum",
    url: "url",
    tier: "kilo",
    logo_asset: bloombergLogo,
    booth_asset: bloombergBoothImg,
    gcal_url:
      "https://calendar.google.com/calendar/embed?height=312&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;mode=WEEK&amp;showPrint=0&amp;showTabs=1",
  },
  neeva: {
    description: "Neeva is a social media company lorem ipsum",
    url: "url",
    tier: "kilo",
    logo_asset: neevaLogo,
    booth_asset: neevaBoothImg,
    gcal_url:
      "https://calendar.google.com/calendar/embed?height=312&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;mode=WEEK&amp;showPrint=0&amp;showTabs=1",
  },
  wolfram: {
    description: "Wolfram is a social media company lorem ipsum",
    url: "url",
    tier: "kilo",
    logo_asset: wolframLogo,
    booth_asset: wolframBoothImg,
    gcal_url:
      "https://calendar.google.com/calendar/embed?height=312&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;mode=WEEK&amp;showPrint=0&amp;showTabs=1",
  },
  sketch: {
    description: "Sketch is a social media company lorem ipsum",
    url: "url",
    tier: "kilo",
    logo_asset: sketchLogo,
    booth_asset: sketchBoothImg,
    gcal_url:
      "https://calendar.google.com/calendar/embed?height=312&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;mode=WEEK&amp;showPrint=0&amp;showTabs=1",
  },
};

export function getSponsorContent(sponsorName: string) {
  return sponsorContents[sponsorName];
}
