import React, { useEffect, useState } from 'react'
import Posts from './Posts';

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

];

export default function CreatedPost({ isCreatedPost }) {

    const [createdPosts, setCreatedPosts] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('listOfPosts');
        setCreatedPosts(JSON.parse(localData) || []);
    }, [localStorage]);

    // useEffect(() => {
    //     const localData = localStorage.getItem('listOfPosts');
    // }, [localStorage]);
    // const createdPosts = JSON.parse(localData);

    // const localData = localStorage.getItem('listOfPosts');
    // const createdPosts = JSON.parse(localData);
    // const createdPosts = DUMMY.concat(JSON.parse(localData));

    return (
        <div className="max-w-7xl m-auto">
            <h1 className='text-3xl p-4 text-[#201d75] font-bold mt-5'>Created Posts</h1>
            <Posts posts={createdPosts === null ? [] : createdPosts} isCreatedPost={isCreatedPost} />
        </div>
    )
}
