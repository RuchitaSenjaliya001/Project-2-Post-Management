import React, { useState, useEffect } from "react";
import PostForm from "./UI/PostForm";
import Modal from "./UI/Modal";

const getLocalItems = () => {
    let list = localStorage.getItem("listOfPosts");

    if (list) {
        return JSON.parse(localStorage.getItem("listOfPosts"));
    } else {
        return [];
    }
};

export default function EditModal({ id, onClose, onEditPost }) {
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
        onEditPost()
        onClose();
    };

    return (
        <Modal onClick={onClose}>
            <PostForm
                enteredData={enteredData}
                inputChangeHandler={inputChangeHandler}
                addPostHandler={editPostHandler}
                isEdit={true}
                onClose={onClose}
            />
        </Modal>
    );
}
