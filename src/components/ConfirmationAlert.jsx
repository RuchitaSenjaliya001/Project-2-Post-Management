import React, { useContext, useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import ModeContext from "../context/mode-context";

export default function ConfirmationAlert({ message, onClose, onProceed }) {
  const ctx = useContext(ModeContext);
  return (
    <>
      <Modal onClick={onClose}>
        <h1 className="text-center font-semibold text-lg">{message}</h1>
        <div className="flex space-x-5 my-4 justify-center">
          <Button
            title="Yes"
            className={`${
              ctx.mode === "dark"
                ? "bg-[#6366F1] hover:bg-[#5157f7]"
                : "bg-[#201D75] hover:bg-[#121056]"
            }`}
            onClick={onProceed}
          />
          <Button
            title="Cancel"
            className="bg-[#ef4444] hover:bg-[#dc2626]"
            onClick={onClose}
          />
        </div>
      </Modal>
    </>
  );
}
