import React, { useState, useEffect, useContext } from "react";
import PostForm from "./UI/PostForm";
import Modal from "./UI/Modal";
import { useNavigate } from "react-router-dom";
import ModeContext from "../context/mode-context";

const getLocalItems = () => {
    let list = localStorage.getItem("listOfPosts");

    if (list) {
        return JSON.parse(localStorage.getItem("listOfPosts"));
    } else {
        return [];
    }
};

export default function EditModal({ id, onClose, onEditPost }) {
    const navigate = useNavigate();
    const ctx = useContext(ModeContext)
    const [enteredData, setEnteredData] = useState({});
    const [postItems, setPostItems] = useState(getLocalItems());

    useEffect(() => {
        const selectedPost = postItems.filter((data) => data.id == id);
        setEnteredData(...selectedPost);
    }, [id]);

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        if (event.target.type === "file") {
            const image = event.target.files[0];

            const reader = new FileReader();
            reader.readAsDataURL(image);

            reader.addEventListener("load", () => {
                setEnteredData({
                    ...enteredData,
                    [name]: reader.result,
                });
            });
        } else {
            setEnteredData({ ...enteredData, [name]: value });
        }
    };

    const editPostHandler = (e) => {
        e.preventDefault();
        const updatedPost = [...postItems];
        const index = updatedPost.findIndex((post) => post.id === enteredData.id);
        updatedPost[index] = enteredData;
        localStorage.setItem("listOfPosts", JSON.stringify(updatedPost));
        setPostItems(updatedPost);
        onClose();
        navigate("/");
        onEditPost();
    };

    return (
        <Modal onClick={onClose} mode={ctx.mode}>
            <PostForm
                enteredData={enteredData}
                mode={ctx.mode}
                inputChangeHandler={inputChangeHandler}
                addPostHandler={editPostHandler}
                isEdit={true}
                onClose={onClose}
            />
        </Modal>
    );
}
