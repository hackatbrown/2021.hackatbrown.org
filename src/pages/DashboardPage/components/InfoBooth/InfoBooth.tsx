import React from "react";
import "./InfoBooth.css";
import InfoBoothModal from "./InfoBoothModal";
import Modal from "react-modal";
import {getInfoContent} from "./InfoBoothContent";


type InfoBoothProps = {
    infoType : string
};

type InfoBoothState = {
    modalIsOpen: boolean;
};

export default class InfoBooth extends React.Component<
    InfoBoothProps,
    InfoBoothState
> {
    constructor(props: InfoBoothProps) {
        super(props);
        this.state ={
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
        const type = this.props.infoType
        const infoDict = getInfoContent(type);
        return (
            // TODO
            <div>
            <button onClick={this.openModal}>{type}</button>
            <Modal style={{overlay: {backgroundColor: 'rgba(255,255,255,0)'}}} className='sponsorModal' isOpen={this.state.modalIsOpen}>
                <InfoBoothModal infoType = {infoDict["infoType"]}
                                description = {infoDict['description']}
                                logo_asset={infoDict['logo_asset']}
                />
            <button id="close" onClick={this.closeModal}>X</button>
            </Modal>

            
            </div>
        );
    }
}