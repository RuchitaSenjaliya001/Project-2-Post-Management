import React, { useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function ConfirmationAlert({ message, onClose, onProceed }) {
    return (
        <>
            <Modal onClick={onClose}>
                <h1 className="text-center font-semibold text-lg">{message}</h1>
                <div className="flex space-x-5 my-4 justify-center">
                    <Button
                        title="Yes"
                        className="bg-[#201d75] hover:bg-[#121056]"
                        onClick={onProceed}
                    />
                    <Button
                        title="Cancel"
                        className="bg-red-500 hover:bg-red-600"
                        onClick={onClose}
                    />
                </div>
            </Modal>
        </>
    );
}
