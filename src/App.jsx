import React from "react";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import PostDetail from "./components/Posts/PostDetail";
import LoginPage from "./pages/LoginPage";
import { loader as exploreLoader } from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./pages/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: exploreLoader },
      {
        path: 'posts', children: [
          { path: ':postId', element: <PostDetail /> }
        ]
      },
      { path: "new-post", element: <NewPost /> },
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
