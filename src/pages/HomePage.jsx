import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ExplorePost from "../components/Posts/ExplorePost";
import CreatedPost from "../components/Posts/CreatedPost";



export default function HomePage() {
    const [isCreatedPost, setIsCreatedPost] = useState(false)

    const userLoginData = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (userLoginData.role === 'admin') {
            setIsCreatedPost(true)
        }
    }, [userLoginData])

    const data = useLoaderData();
    const posts = data.slice(0, 10);

    return (
        <>
            <CreatedPost isCreatedPost={isCreatedPost} />
            <ExplorePost explorePosts={posts} />
        </>
    );
}

export const loader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        alert("Could not fetch data");
    } else {
        const resData = await response.json();
        return resData;
    }
};
