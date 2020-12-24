import React from "react";
import "./SponsorBooth.css";
import SponsorBoothModal from "./SponsorBoothModal";
import Modal from "react-modal";

type SponsorBoothProps = {
    sponsorName : string
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
      return (
        <div>
          <button onClick={this.openModal}>Sponsor Modal</button>
          <Modal style={{overlay: {backgroundColor: 'rgba(255,255,255,0)'}}} className='sponsorModal' isOpen={this.state.modalIsOpen}>
            <SponsorBoothModal sponsorInfo={'facebook'} />
            <div className='sponsorTiers'>Giga</div>
            <button id="close" onClick={this.closeModal}>X</button>
          </Modal>
        </div>
    );
    }
}
