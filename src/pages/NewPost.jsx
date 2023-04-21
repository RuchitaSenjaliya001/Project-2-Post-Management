import React, { useState } from "react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

export default function NewPost() {
    return (
        <>
            <h1 className="text-center text-3xl font-bold my-4">
                Let's Create New Post
            </h1>
            <div>
                <form action="" className="p-5">
                    <Input type="text" title="Enter Title" name="title" />
                    <Input type="text" title="Enter Body" name="body" />
                    <Input type="file" title="Enter Image" name="image" />
                    <Button
                        type="submit"
                        title="Add Post"
                        className="w-1/2 bg-[#201d75]"
                    />
                </form>
            </div>
        </>
    );
}
