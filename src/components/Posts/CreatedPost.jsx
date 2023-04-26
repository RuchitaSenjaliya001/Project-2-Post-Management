import React, { useEffect, useState } from "react";
import Posts from "./Posts";

export default function CreatedPost({ isCreatedPost }) {
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
            <h1 className="text-3xl py-4 text-[#201d75] font-bold mt-5">
                Created Posts
            </h1>
            <Posts
                posts={createdPosts === null ? [] : createdPosts}
                isCreatedPost={isCreatedPost}
                onEditPost={onEditPost}
            />
        </div>
    );
}
