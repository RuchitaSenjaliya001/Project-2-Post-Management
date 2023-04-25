import React, { useState } from "react";
import NewPost from "../components/Posts/NewPost";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export default function NewPostPage() {
    return <NewPost />;
}

export async function action({ request }) {
    const data = await request.formData();
    const postData = {
        title: data.get("title"),
        body: data.get("body"),
        image: data.get("image"),
    };
    console.log(postData);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    if (!response.ok) {
        toast.error("Could not send data");
    }
    toast.success("Post added succesfully");
    return redirect("/");
}
