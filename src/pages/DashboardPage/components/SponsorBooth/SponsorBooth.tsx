import React from "react";
import "./SponsorBooth.css";
import SponsorBoothModal from "./SponsorBoothModal";
import Modal from "react-modal";
import { getSponsorContent } from "./SponsorBoothContents";

type SponsorBoothProps = {
  sponsorName: string;
};

type SponsorBoothState = {
  modalIsOpen: boolean;
};

export default class SponsorBooth extends React.Component<
  SponsorBoothProps,
  SponsorBoothState
> {
  constructor(props: SponsorBoothProps) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const sponsor = this.props.sponsorName;
    const sponsorDict = getSponsorContent(sponsor);
    return (
      <>
        <button onClick={this.openModal} id="sponsor-button">
          <img src={sponsorDict["booth_asset"]} id="button-image" alt={sponsor} />
        </button>
        <Modal
          style={{ overlay: { backgroundColor: "rgba(0,0,0,0.5)" } }}
          className="sponsorModal"
          isOpen={this.state.modalIsOpen}
        >
          <SponsorBoothModal
            sponsorDescription={sponsorDict["description"]}
            sponsorURL={sponsorDict["url"]}
            sponsorTier={sponsorDict["tier"]}
            sponsorLogoAsset={sponsorDict["logo_asset"]}
            sponsorGCalURL={sponsorDict["gcal_url"]}
            sponsorReps={sponsorDict["reps"]}
            sponsorDiscord1={sponsorDict["discord1"]}
            sponsorDiscord2={sponsorDict["discord2"]}
          />
          <button id="close" onClick={this.closeModal}>
            X
          </button>
        </Modal>
      </>
    );
  }
}
