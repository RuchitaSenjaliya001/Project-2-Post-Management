import React from "react";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import PostDetail from "./components/Posts/PostDetail";
import LoginPage from "./pages/LoginPage";
import { loader as exploreLoader } from "./pages/HomePage";
import Error from "./pages/Error";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NewPostPage from "./pages/NewPostPage";
import PrivateRoute from "./routes/PrivateRoute";
import { action as newPostAction } from "./pages/NewPostPage";


const userLoginData = JSON.parse(localStorage.getItem("user"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <PrivateRoute>
        <RootLayout
          userLoginData={
            userLoginData ? userLoginData : <Navigate to="/login" />
          }
        />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        ),
        loader: exploreLoader,
      },

      {
        path: ":postId",
        element: (
          <PrivateRoute>
            <PostDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "new-post",
        element: (
          <PrivateRoute>
            <NewPostPage />
          </PrivateRoute>
        ),
        action: newPostAction,
      },
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
