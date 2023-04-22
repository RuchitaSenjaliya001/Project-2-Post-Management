import React, { Fragment } from "react";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-75" />
    );
};

const ModalOverlay = (props) => {
    return (
        <div className="fixed top-[20vh] left-[35%] w-1/3 bg-white p-4 rounded-md z-30 duration-300 ease-out">
            <div className="content">{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
}
