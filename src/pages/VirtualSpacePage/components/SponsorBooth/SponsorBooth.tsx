import React from "react";
import "./SponsorBooth.css";
import SponsorBoothModal from "./SponsorBoothModal";
import Modal from "react-modal";
import SponsorBoothContent from "./SponsorBoothContents";

type SponsorBoothProps = {
    sponsorName : string;
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
      this.setState({ modalIsOpen: true })
    }

    closeModal = () => {
      this.setState({ modalIsOpen: false });
    }

    render() {
      const sponsor = this.props.sponsorName as string;
      const sponsordict = SponsorBoothContent['facebook'];
      //inserting sponsor instead of a direct string breaks?
      //"No index signature with a parameter of type 'string' was found on type"
      return (
        <div>
          <button onClick={this.openModal}>{sponsor}</button>
          <Modal style={{overlay: {backgroundColor: 'rgba(255,255,255,0)'}}} className='sponsorModal' isOpen={this.state.modalIsOpen}>
            <SponsorBoothModal sponsorDescription={sponsordict['description']}
                               sponsorURL={sponsordict['url']}
                               sponsorTier={sponsordict['tier']}
                               sponsorAsset={sponsordict['asset_path']}
            />
            <button id="close" onClick={this.closeModal}>X</button>
          </Modal>
        </div>
    );
    }
}
