import React, { useEffect, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const getLocalItems = () => {
    let list = localStorage.getItem('listOfPosts');

    if (list) {
        return JSON.parse(localStorage.getItem('listOfPosts'))
    } else {
        return [];
    }
}

export default function NewPost() {
    const navigate = useNavigate()
    const [enteredData, setEnteredData] = useState({
        id: Math.floor(Math.random() * 9000 + 1000),
        title: "",
        body: "",
        image: "",
    });
    const [postItems, setPostItems] = useState(getLocalItems())

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
        if (enteredData.title === '' || enteredData.body === '') {
            return
        } else {
            setPostItems([...postItems, enteredData])
            setEnteredData({
                title: "",
                body: "",
                image: "",
            })
            navigate('/')
        }

    }


    // set form data to local storage
    useEffect(() => {
        localStorage.setItem("listOfPosts", JSON.stringify(postItems));
    }, [postItems])



    return (
        <>
            <h1 className="text-center text-3xl font-bold my-4">
                Let's Create New Post
            </h1>
            <div className="max-w-2xl m-auto">
                <form action="" className="p-5 text-center">
                    <Input
                        type="text"
                        title="Enter Title"
                        name="title"
                        value={enteredData.title}
                        onChange={inputChangeHandler}
                    />
                    {/* <Input type="text" title="Enter Body" name="body" /> */}
                    <div className="relative">
                        <textarea
                            name="body"
                            value={enteredData.body}
                            id="body"
                            rows="5"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            onChange={inputChangeHandler}
                        ></textarea>
                        <label
                            htmlFor="body"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[16%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                            Enter Body
                        </label>
                    </div>
                    <Input
                        type="file"
                        title="Enter Image"
                        name="image"
                        // value={enteredData.image}
                        onChange={inputChangeHandler}
                    />
                    <Button
                        type="submit"
                        onClick={addPostHandler}
                        title="Add Post"
                        className="w-1/2 bg-[#201d75]"
                    />
                </form>

            </div>
        </>
    );
}
