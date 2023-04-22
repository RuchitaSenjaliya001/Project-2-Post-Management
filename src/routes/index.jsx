import React from "react";
import RootLayout from '../pages/RootLayout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NewPostPage from '../pages/NewPostPage'
import PostDetail from '../components/Posts/PostDetail'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as exploreLoader } from "../pages/HomePage";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const storage = JSON.parse(localStorage.getItem('isLoggedIn'));
const postData = JSON.parse(localStorage.getItem("listOfPosts"))
console.log(storage);
const isAuth = storage ? storage : null
const IsLogin = () => {
    return (
        <Navigate to={'/'} />
    )
}


export const router = createBrowserRouter([

    {
        element: <PrivateRoute isAuth={isAuth} />, children: [
            {
                path: "/",
                element: <RootLayout />,
                children: [
                    { index: true, element: <HomePage />, loader: exploreLoader },
                    {
                        path: 'posts', children: [
                            { path: ':postId', element: <PostDetail postData={postData} /> }
                        ]
                    },
                    { path: "new-post", element: <NewPostPage /> },
                ],
            },
        ]
    },
    { path: "login", element: !storage ? <LoginPage /> : <IsLogin /> },

]);


