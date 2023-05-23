import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import ModeContext from "../../context/mode-context";
const Backdrop = (props) => {
    return (
        <div
            onClick={props.onClick}
            className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-75"
        />
    );
};

const ModalOverlay = (props) => {
    const ctx = useContext(ModeContext)
    return (
        <div className={`w-[90%] left-[5%] fixed top-[20vh] md:left-[31%] ${ctx.mode === 'dark' ? 'bg-[#1a2338] text-white' : 'bg-white'} md:w-[40%] p-4 rounded-md z-30 duration-300 ease-out`}>
            <div className="content">{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

export default function Modal({ onClick, children }) {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClick={onClick} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay >{children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
}
