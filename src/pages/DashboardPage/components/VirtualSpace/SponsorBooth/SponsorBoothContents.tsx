import bloombergLogo from "../../../../../assets/images/LandingPage/companylogo/Bloomberg.png";
import neevaLogo from "../../../../../assets/images/LandingPage/companylogo/neeva.png";
import wolframLogo from "../../../../../assets/images/LandingPage/companylogo/wolfram.png";
import sketchLogo from "../../../../../assets/images/LandingPage/companylogo/sketch.png";
import bloombergBoothImg from "../../../../../assets/images/VirtualSpace/bloomberg.png";
import neevaBoothImg from "../../../../../assets/images/VirtualSpace/neeva.png";
import wolframBoothImg from "../../../../../assets/images/VirtualSpace/wolfram.png";
import sketchBoothImg from "../../../../../assets/images/VirtualSpace/sketch.png";

type SponsorContentType = {
  description: string;
  url: string;
  tier: string;
  logo_asset: string;
  booth_asset: string;
  gcal_url: string;
  reps: string;
  discord1: string;
  discord2: string;
};

// TODO: New sponsor contents need to be added here.
const sponsorContents: { [sponsorName: string]: SponsorContentType } = {
  bloomberg: {
    description: "Bloomberg is a media conglomerate that is a provider of financial news and information, research, and financial data.",
    url: "url",
    tier: "kilo",
    logo_asset: bloombergLogo,
    booth_asset: bloombergBoothImg,
    gcal_url:
      "https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUxMSEtmVDZWeGFnfGRlZmF1bHR8NjM1ZmMzZmI3N2VlMjgxOTAxZDJmYWMwYjg1ODdkNjg&fbclid=IwAR0lJQYpC8gXiBxB6Pe-1kWEEFMDZ0w5DZVdqvdtVvIHra3vmcvh9czizEE",
    reps: "reps",
    discord1: "https://discord.gg/USjDxZrqSz",
    discord2: "https://discord.gg/VqRfaV5m3X",
  },
  neeva: {
    description: "Neeva is a search engine that looks for information on the web as well as personal files like emails and other documents while never profiting from user data.",
    url: "url",
    tier: "kilo",
    logo_asset: neevaLogo,
    booth_asset: neevaBoothImg,
    gcal_url:
      "https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUxMSEtmVDZWeGFnfGRlZmF1bHR8NjM1ZmMzZmI3N2VlMjgxOTAxZDJmYWMwYjg1ODdkNjg&fbclid=IwAR0lJQYpC8gXiBxB6Pe-1kWEEFMDZ0w5DZVdqvdtVvIHra3vmcvh9czizEE",
    reps: "reps",
    discord1: "https://discord.gg/tTh6pPSeuQ",
    discord2: "https://discord.gg/VWhwZrrawA",
  },
  wolfram: {
    description: "Wolfram is a computer, web, and cloud software company focused on developing science and technology to improve tools for computation.",
    url: "url",
    tier: "kilo",
    logo_asset: wolframLogo,
    booth_asset: wolframBoothImg,
    gcal_url:
      "https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUxMSEtmVDZWeGFnfGRlZmF1bHR8NjM1ZmMzZmI3N2VlMjgxOTAxZDJmYWMwYjg1ODdkNjg&fbclid=IwAR0lJQYpC8gXiBxB6Pe-1kWEEFMDZ0w5DZVdqvdtVvIHra3vmcvh9czizEE",
    reps: "reps",
    discord1: "https://discord.gg/JGqmsxjkXE",
    discord2: "https://discord.gg/5EZ4v6kzt5",
  },
  sketch: {
    description: "Sketch is a company that develops a tool for designing user interfaces, websites, and icons. It provides a platform enabling designers and teams to create, prototype, and collaborate.",
    url: "url",
    tier: "kilo",
    logo_asset: sketchLogo,
    booth_asset: sketchBoothImg,
    gcal_url:
      "https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUxMSEtmVDZWeGFnfGRlZmF1bHR8NjM1ZmMzZmI3N2VlMjgxOTAxZDJmYWMwYjg1ODdkNjg&fbclid=IwAR0lJQYpC8gXiBxB6Pe-1kWEEFMDZ0w5DZVdqvdtVvIHra3vmcvh9czizEE",
    reps: "reps",
    discord1: "https://discord.gg/JaMsxsVY7b",
    discord2: "https://discord.gg/UTEvgAT5Hw",
  },
};

export function getSponsorContent(sponsorName: string) {
  return sponsorContents[sponsorName];
}
