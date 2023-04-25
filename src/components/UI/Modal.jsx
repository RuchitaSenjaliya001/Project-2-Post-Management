import React, { Fragment } from "react";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
    return (
        <div
            onClick={props.onClick}
            className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-75"
        />
    );
};

const ModalOverlay = (props) => {
    return (
        <div className="w-[90%] left-[5%] fixed top-[20vh] md:left-[31%] md:w-[40%] bg-white p-4 rounded-md z-30 duration-300 ease-out">
            <div className="content">{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClick} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
}
