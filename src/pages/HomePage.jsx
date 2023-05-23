import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CreatedPost from "../components/Posts/CreatedPost";

import { ToastContainer } from "react-toastify";
import Pagination from "../components/UI/Pagination";
import Footer from "../components/UI/Footer";
import ModeContext from "../context/mode-context";

const ExplorePost = lazy(() => import('../components/Posts/ExplorePost'))


export default function HomePage() {

    const [isAdmin, setIsAdmin] = useState(false);
    const userLoginData = JSON.parse(localStorage.getItem("user"));

    const ctx = useContext(ModeContext)

    useEffect(() => {
        if (userLoginData.role === "admin") {
            setIsAdmin(true);
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
        <div className={`${ctx.mode === 'dark' && ' bg-gradient-to-b from-[#1a2338] via-[#1b3576] to-[#1a2338]'}`}>
            {/* <div className={`${ctx.mode === 'dark' && 'bg-[#1a2338]'}`}> */}
            <CreatedPost isAdmin={isAdmin} mode={ctx.mode} />

            <Suspense fallback={<p className="text-center text-xl font-bold pt-5 ">Fetching Posts...</p>}>
                <ExplorePost explorePosts={currentPost} mode={ctx.mode} />
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
                theme={`${ctx.mode === 'dark' ? 'dark' : 'light'}`}
            />
            <Pagination prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} totalPage={totalPage} mode={ctx.mode} />
            <Footer mode={ctx.mode} />
        </div>
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
