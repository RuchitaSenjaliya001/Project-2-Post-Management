import React, { useState } from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import ConfirmationAlert from "../ConfirmationAlert";
import EditModal from "../EditModal";

export default function PostItem({
    title,
    body,
    image,
    id,
    onDelete,
    isCreatedPost,
    onClick,
}) {
    const loginInfo = localStorage.getItem("user");
    const userLoginData = JSON.parse(loginInfo);
    const [editModal, setEditModal] = useState({ show: false, id: null })
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = () => {
        setShowModal(true);
    };

    const hideModalHandler = () => {
        setShowModal(false);
    };
    const editShowModalHandler = (id) => {
        setEditModal({ show: true, id: id });
    };

    const editHideModalHandler = () => {
        setEditModal({ show: false, id: null });
    };
    return (
        <>
            {showModal && (
                <ConfirmationAlert
                    message="Are you sure you want to delete this post?"
                    onClose={hideModalHandler}
                    onProceed={onDelete}
                />
            )}
            {editModal.show && (
                <EditModal onClose={editHideModalHandler} id={editModal.id} />
            )}

            <div
                className={`flex flex-col shadow-xl md:basis-[46%] lg:basis-[30%] sm:max-w-xl rounded-lg overflow-hidden pb-5 ${isCreatedPost && "cursor-pointer"
                    }`}
            >
                <div onClick={onClick}>
                    <img
                        src={image}
                        alt=""
                        className="w-[500px] h-[300px] object-cover"
                    />
                    <div className="">
                        <h1 className="text-2xl font-semibold py-3 text-center">{title}</h1>
                        <p className="text-gray-800 text-lg px-5 pb-5 text-justify text-ellipsis ">
                            {body}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-full px-5">
                    {isCreatedPost && userLoginData.role === "admin" && (
                        <div className="flex justify-end space-x-4">
                            <Button
                                title="Delete"
                                className="bg-red-500 hover:bg-red-600 rounded-md"
                                onClick={showModalHandler}
                            />

                            <Button
                                title="Edit"
                                onClick={() => editShowModalHandler(id)}
                                className="bg-[#201d75] hover:bg-[#121056] rounded-md"
                            />

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
