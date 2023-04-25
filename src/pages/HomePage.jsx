import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ExplorePost from "../components/Posts/ExplorePost";
import CreatedPost from "../components/Posts/CreatedPost";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/UI/Footer";
// import { redirect } from "react-router-dom";

export default function HomePage() {

    const [isCreatedPost, setIsCreatedPost] = useState(false);
    const userLoginData = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (userLoginData.role === "admin") {
            setIsCreatedPost(true);
        }
    }, [userLoginData]);

    const data = useLoaderData();
    const posts = data.slice(0, 10);

    return (
        <>
            <CreatedPost isCreatedPost={isCreatedPost} />
            <ExplorePost explorePosts={posts} />
            <Footer />
            {/* {alert("home")} */}
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
