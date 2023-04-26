import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ExplorePost from "../components/Posts/ExplorePost";
import CreatedPost from "../components/Posts/CreatedPost";
import { ToastContainer } from "react-toastify";
import Pagination from "../components/UI/Pagination";

export default function HomePage() {

    const [isCreatedPost, setIsCreatedPost] = useState(false);
    const userLoginData = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (userLoginData.role === "admin") {
            setIsCreatedPost(true);
        }
    }, [userLoginData]);

    const data = useLoaderData();
    // const [posts, setPosts] = useState(data)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)

    // useEffect(() => {
    //     const fetchPost = () => {
    //         setLoading(true)
    //         setPosts(data)
    //         setLoading(false)
    //     }
    //     fetchPost();

    // }, [])

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)
    const totalPage = 10

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
        if (currentPage <= 1) {
            setCurrentPage(1);
        }
    };
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage >= totalPage) {
            setCurrentPage(totalPage);
        }
    };

    return (
        <>
            <CreatedPost isCreatedPost={isCreatedPost} />
            <ExplorePost explorePosts={currentPost} loading={loading} />
            <Pagination prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} totalPage={totalPage} />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
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
