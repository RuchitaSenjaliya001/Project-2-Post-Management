import React from "react";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import PostDetail from "./components/Posts/PostDetail";
import LoginPage from "./pages/LoginPage";
import { loader as exploreLoader } from "./pages/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPostPage from "./pages/NewPostPage";
import Error from "./pages/Error";
import { router } from "./routes";

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
