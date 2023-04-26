import React, { Suspense, lazy, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import ExplorePost from "../components/Posts/ExplorePost";
import CreatedPost from "../components/Posts/CreatedPost";

import { ToastContainer } from "react-toastify";
import Pagination from "../components/UI/Pagination";
import Footer from "../components/UI/Footer";

const ExplorePost = lazy(() => import('../components/Posts/ExplorePost'))


export default function HomePage() {

    const [isCreatedPost, setIsCreatedPost] = useState(false);
    const userLoginData = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (userLoginData.role === "admin") {
            setIsCreatedPost(true);
        }
    }, [userLoginData]);

    const data = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)

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

            <Suspense fallback={<p className="text-center text-xl font-bold pt-5 ">Fetching Posts...</p>}>
                <ExplorePost explorePosts={currentPost} />
            </Suspense>
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
            <Pagination prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} totalPage={totalPage} />
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
