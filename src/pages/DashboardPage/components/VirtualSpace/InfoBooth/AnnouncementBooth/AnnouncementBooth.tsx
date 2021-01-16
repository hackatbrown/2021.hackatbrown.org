import React from "react";
import "./AnnouncementBooth.css";
import InfoBoothModal from "../InfoBoothModal";
import Modal from "react-modal";
import { getInfoContent } from "../InfoBoothContent";

const DAY_ONE = "January 23, 2021 ";
const DAY_TWO = "January 24, 2021 ";

const TEST = "January 15, 2021 ";

let TIME_RANGE_ANNOUNCEMENTS = new Map();
  
TIME_RANGE_ANNOUNCEMENTS.set([new Date(TEST.concat("19:57:00")), new Date(TEST.concat("19:57:59"))], "FIRST ANNOUNCEMENT");
TIME_RANGE_ANNOUNCEMENTS.set([new Date(TEST.concat("19:58:00")), new Date(TEST.concat("19:58:59"))], "SECOND ANNOUNCEMENT");

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
    // Opening announcement modal for the first time since announcement was updated.
    if (!this.isAnnouncementChecked()) {
      localStorage.setItem("checkedLatest", "true");
      this.setState({ checkedLatest: true });
      // Rest tab title in browser
      document.title = 'Hack@Brown 2021';
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
    TIME_RANGE_ANNOUNCEMENTS.forEach((value, key) => {
      const start = key[0];
      const end = key[1];
      if (start <= currentTime && currentTime <= end) {
        announcement = value;
      }
    })

    if (!announcement) {
      announcement = "HELLOOOOOO";
    }

    return announcement;
  }

  fetchAnnouncementUpdate = () => {
    const newAnnouncement = this.getCurrentAnnouncement();
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
        document.title = '(1) Hack@Brown 2021';
      }
    }
  }

  componentDidMount = () => {
    if (localStorage.getItem("checkedLatest") === null) {
      localStorage.setItem("checkedLatest", "false");
    }
    // localStorage.setItem("checkedLatest", "false");

    const announcement = this.getCurrentAnnouncement();
    this.setState({ lastAnnouncement: announcement, currentAnnouncement: announcement, checkedLatest: this.isAnnouncementChecked() });

    this.setState({ interval: setInterval(() => this.fetchAnnouncementUpdate(), 5000)});
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
