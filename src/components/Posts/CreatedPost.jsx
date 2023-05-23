import React, { useContext, useEffect, useState } from "react";
import Posts from "./Posts";
import ModeContext from "../../context/mode-context";

export default function CreatedPost({ isAdmin, mode }) {
    const [createdPosts, setCreatedPosts] = useState([]);
    const localData = localStorage.getItem("listOfPosts");


    useEffect(() => {
        setCreatedPosts(JSON.parse(localData) || []);
    }, [localStorage.getItem("listOfPosts")]);

    const onEditPost = () => {
        let localPosts = JSON.parse(localStorage.getItem("listOfPosts"));
        setCreatedPosts(localPosts);
    };

    return (
        <div className="max-w-7xl m-auto">
            <h1 className={`text-3xl py-4 ${mode === 'dark' ? 'text-white' : 'text-[#201D75]'} font-bold pt-5`}>
                Created Posts
            </h1>
            <Posts
                posts={createdPosts === null ? [] : createdPosts}
                isAdmin={isAdmin}
                isLocal={true}
                mode={mode}
                onEditPost={onEditPost}
            />
        </div>
    );
}
