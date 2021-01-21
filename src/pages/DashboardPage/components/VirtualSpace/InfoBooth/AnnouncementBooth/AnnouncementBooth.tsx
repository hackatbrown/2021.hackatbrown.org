import React from "react";
import "./AnnouncementBooth.css";
import InfoBoothModal from "../InfoBoothModal";
import Modal from "react-modal";
import { getInfoContent } from "../InfoBoothContent";
import { getAnnouncementContent } from "./AnnouncementBoothContent";

const TIME_ANNOUNCEMENTS_MAP = getAnnouncementContent();

const WELCOME_ANNOUNCEMENTS = "Welcome to Hack@Brown! Keep H@B Town opened so you don't miss any upcoming announcements!";
const SUBMISSION_ANNOUNCEMENTS = "Remember to submit your project by 2PM!";

const REMIND_SUBMISSION_TIME = new Date("January 24, 2021 12:30:00"); // Remember to change to 1/24!

const FETCH_INTERVAL = 300000; // 5 minutes

type AnnouncementBoothProps = {
  infoType: string;
};

type AnnouncementBoothState = {
  modalIsOpen: boolean;
  lastAnnouncement: string;
  currentAnnouncement: string;
  checkedLatest: boolean;
  interval: any,
};

export default class AnnouncementBooth extends React.Component<
  AnnouncementBoothProps,
  AnnouncementBoothState
> {
  constructor(props: AnnouncementBoothProps) {
    super(props);
    this.state = {
      modalIsOpen: false,
      lastAnnouncement: "",
      currentAnnouncement: "",
      checkedLatest: false,
      interval: null,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
    // Opening announcement modal for the first time since announcement was last updated.
    if (!this.isAnnouncementChecked()) {
      localStorage.setItem("checkedLatest", "true");
      this.setState({ checkedLatest: true });
      // Reset tab title in browser
      document.title = "Hack@Brown 2021";
    }
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  isAnnouncementChecked = () => {
    return (localStorage.getItem("checkedLatest") === "true");
  }

  getCurrentAnnouncement = () => {
    const currentTime = new Date();
    let announcement;
    TIME_ANNOUNCEMENTS_MAP.forEach((value, key) => {
      const startTime = key[0];
      const endTime = key[1];
      if (startTime <= currentTime && currentTime <= endTime) {
        announcement = value;
      }
    })

    if (!announcement) {
      if (currentTime >= REMIND_SUBMISSION_TIME) {
        announcement = SUBMISSION_ANNOUNCEMENTS;
      } else {
        announcement = WELCOME_ANNOUNCEMENTS;
      }
    }

    return announcement;
  }

  fetchAnnouncementUpdate = () => {
    const newAnnouncement = this.getCurrentAnnouncement();
    // A new time window trigger a new announcement
    if (newAnnouncement !== this.state.currentAnnouncement) {
      const currentAnnouncement = this.state.currentAnnouncement;
      this.setState({ lastAnnouncement: currentAnnouncement, currentAnnouncement: newAnnouncement });

      // Close modal if it's open
      if (this.state.modalIsOpen) {
        this.closeModal();
      }

      // If last announcement was checked, meaning users has opened modal, set checkedLast to false
      if (this.isAnnouncementChecked()) {
        localStorage.setItem("checkedLatest", "false");
        this.setState({ checkedLatest: false });

        // Change tab title in browser
        document.title = "(1) Hack@Brown 2021";
      }
    }
  }

  componentDidMount = () => {
    // Initialize variable in cache
    if (localStorage.getItem("checkedLatest") === null) {
      localStorage.setItem("checkedLatest", "false");
    }
    // localStorage.setItem("checkedLatest", "false");

    const announcement = this.getCurrentAnnouncement();
    this.setState({ lastAnnouncement: announcement, currentAnnouncement: announcement, checkedLatest: this.isAnnouncementChecked() });

    // fetch announcement update every
    this.setState({ interval: setInterval(() => this.fetchAnnouncementUpdate(), FETCH_INTERVAL)});
  }

  componentWillUnmount = () => {
    clearInterval(this.state.interval);
  }

  render() {
    const type = this.props.infoType;
    const infoDict = getInfoContent(type);
    const xcolor = infoDict["htext_color"];
    return (
      <>
        <button onClick={this.openModal} id="announcement-button">
          <img src={infoDict["booth_asset"]} id="button-image" className={!this.state.checkedLatest ? "glow-button" : null} alt={type} />
        </button>
        <Modal
          style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
          className="announcementModal"
          isOpen={this.state.modalIsOpen}
          centered
        >
          <InfoBoothModal
            infoType={type}
            logo_asset={infoDict["logo_asset"]}
            head_color={infoDict["head_color"]}
            htext_color={infoDict["htext_color"]}
            announcement={this.state.currentAnnouncement}
          />
          <button
            id="info-close"
            style={{ color: xcolor }}
            onClick={this.closeModal}
          >
            X
          </button>
        </Modal>
      </>
    );
  }
}
