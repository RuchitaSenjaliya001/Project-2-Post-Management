import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import PostForm from "../UI/PostForm";

const getLocalItems = () => {
    let list = localStorage.getItem("listOfPosts");

    if (list) {
        return JSON.parse(localStorage.getItem("listOfPosts"));
    } else {
        return [];
    }
};

export default function NewPost() {
    const navigate = useNavigate();
    const [enteredData, setEnteredData] = useState({
        id: Math.floor(Math.random() * 9000 + 1000),
        title: "",
        body: "",
        image: "",
    });
    const [postItems, setPostItems] = useState(getLocalItems());

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

    const addPostHandler = (e) => {
        e.preventDefault();
        if (enteredData.title === "" || enteredData.body === "") {
            return;
        } else {
            setPostItems([...postItems, enteredData]);
            setEnteredData({
                title: "",
                body: "",
                image: "",
            });
            navigate("/");
        }
    };

    // set form data to local storage
    useEffect(() => {
        localStorage.setItem("listOfPosts", JSON.stringify(postItems));
    }, [postItems]);

    return (
        <>
            <h1 className="text-center text-3xl font-bold my-4">
                Let's Create New Post
            </h1>
            <div className="max-w-2xl m-auto">
                <PostForm
                    enteredData={enteredData}
                    inputChangeHandler={inputChangeHandler}
                    addPostHandler={addPostHandler}
                />
            </div>
        </>
    );
}
