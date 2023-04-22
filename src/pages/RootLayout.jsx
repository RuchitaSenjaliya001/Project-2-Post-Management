import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import ConfirmationAlert from "../components/ConfirmationAlert";

export default function RootLayout() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };
    const hideModalHandler = () => {
        setShowModal(false);
    };
    const logoutHandler = () => {
        localStorage.setItem("isLoggedIn", false);
        // localStorage.removeItem('user');
        navigate("/");

    };
    return (
        <>
            {showModal && (
                <ConfirmationAlert
                    message="You are about to log out, are you sure?"
                    onClose={hideModalHandler}
                    onProceed={logoutHandler}
                />
            )}
            <Navbar showModalHandler={showModalHandler} />
            <Outlet />
        </>
    );
}
