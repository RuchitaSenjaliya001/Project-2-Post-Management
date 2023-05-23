import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import ConfirmationAlert from "../ConfirmationAlert";
import EditModal from "../EditModal";
import ModeContext from "../../context/mode-context";

export default function PostItem({
    title,
    body,
    image,
    id,
    mode,
    onDelete,
    isAdmin,
    isLocal,
    onClick,
    onEditPost,
}) {


    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState({ show: false, id: null });

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
                <EditModal
                    onClose={editHideModalHandler}
                    id={editModal.id}
                    onEditPost={onEditPost}
                />
            )}

            <div
                className={`flex flex-col ${mode === 'dark' && 'bg-[#0B1120] text-white '} dark:shadow-xl h-full sm:max-w-xl rounded-lg overflow-hidden pb-5 ${isLocal && "cursor-pointer"
                    }`}
            >
                <div onClick={isLocal && onClick}>
                    <img
                        src={image}
                        alt=""
                        className="w-[500px] h-[300px] object-cover"
                    />
                    <div className="">
                        <h1 className="text-2xl font-semibold py-3 text-center">{title}</h1>
                        <p className={` ${mode === 'dark' ? 'text-[#ABB1BC]' : 'text-gray-800'} text-lg px-5 pb-5 text-justify text-ellipsis`}>
                            {body}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-end h-full px-5">
                    {isAdmin && (
                        <div className="flex justify-end space-x-4">
                            <Button
                                title="Delete"
                                className="bg-red-500 hover:bg-red-600 rounded-md"
                                onClick={showModalHandler}
                            />
                            <Button
                                title="Edit"
                                onClick={() => editShowModalHandler(id)}
                                className={`${mode === 'dark' ? 'bg-[#6366F1] hover:bg-[#454bf7]' : 'bg-[#201D75] hover:bg-[#121056]'} rounded-md'`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
