import React from "react";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import PostDetail from "./components/Posts/PostDetail";
import LoginPage from "./pages/LoginPage";
import { loader as exploreLoader } from "./pages/HomePage";
import { Navigate, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPostPage from "./pages/NewPostPage";
import PrivateRoute from "./routes/PrivateRoute";

const postData = JSON.parse(localStorage.getItem('listOfPosts'))

const userLoginData = JSON.parse(localStorage.getItem("user"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><RootLayout userLoginData={userLoginData ? userLoginData : <Navigate to='/login' />} /></PrivateRoute>,
    children: [
      { path: "/", element: <PrivateRoute><HomePage /></PrivateRoute>, loader: exploreLoader },
      {
        path: 'posts', children: [
          { path: ':postId', element: <PrivateRoute><PostDetail postData={postData} /></PrivateRoute> }
        ]
      },
      { path: "new-post", element: <PrivateRoute><NewPostPage /></PrivateRoute> },
    ],
  },
  { path: "login", element: <LoginPage /> },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;