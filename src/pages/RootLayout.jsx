import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import ConfirmationAlert from "../components/ConfirmationAlert";

export default function RootLayout({ userLoginData }) {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);


    const showModalHandler = () => {
        setShowModal(true);
    };
    const hideModalHandler = () => {
        setShowModal(false);
    };
    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        navigate("/login");
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
            <Navbar
                showModalHandler={showModalHandler}
                userLoginData={userLoginData}
            />
            <Outlet />
        </>
    );
}
