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
          <button onClick={this.openModal}>Launch demo modal 2</button>
          <Modal isOpen={this.state.modalIsOpen}>
            <SponsorBoothModal sponsorInfo={'elephants'} />
            <button id="close" onClick={this.closeModal}>X</button>
          </Modal>
        </div>
    );
    }
}
