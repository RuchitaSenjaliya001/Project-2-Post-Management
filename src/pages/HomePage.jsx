import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ExplorePost from "../components/Posts/ExplorePost";
import CreatedPost from "../components/Posts/CreatedPost";

const DUMMY = [
    {
        id: "p1",
        title: "Post 1",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
    {
        id: "p2",
        title: "Post 2",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
    {
        id: "p3",
        title: "Post 3",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
    {
        id: "p4",
        title: "Post 4",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
    {
        id: "p5",
        title: "Post 5",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
];

export default function HomePage() {
    const [isCreatedPost, setIsCreatedPost] = useState(false)

    const loginInfo = localStorage.getItem("user");
    const userLoginData = JSON.parse(loginInfo);

    useEffect(() => {
        if (userLoginData.role === 'admin') {
            setIsCreatedPost(true)
        }
    }, [userLoginData])

    const data = useLoaderData();
    const posts = data.slice(0, 10);

    return (
        <>
            <CreatedPost createdPosts={DUMMY} isCreatedPost={isCreatedPost} />
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
