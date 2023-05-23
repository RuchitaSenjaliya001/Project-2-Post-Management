import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

export default function Posts({ posts, isAdmin, onEditPost, isLocal, mode }) {
    const navigate = useNavigate();
    const [postData, setPostData] = useState(posts);
    const user = JSON.parse(localStorage.getItem("user"));

    const deleteHandler = (id) => {
        const filteredData = postData.filter((item) => item.id !== id);
        setPostData(filteredData);
        localStorage.setItem("listOfPosts", JSON.stringify(filteredData));
    };

    useEffect(() => {
        setPostData(posts);
    }, [posts]);

    const clickHandler = (id) => {
        if (isLocal) {
            navigate(`${id}`);
        }
    };

    return (
        <>
            <section className="my-5">
                {isAdmin && postData.length === 0 && (
                    <div className="text-center">
                        <p className={`${mode === 'dark' ? 'text-white' : 'text-black'} text-center font-semibold text-xl`}>
                            No post created by admin
                        </p>
                        {user.role === "admin" && (
                            <Link to="/new-post">
                                <Button
                                    type="button"
                                    className={`${mode === 'dark' ? 'bg-[#6366F1] hover:bg-[#454bf7]' : 'bg-[#201D75] hover:bg-[#121056]'} mt-3`}
                                    title="Create new post"
                                />
                            </Link>
                        )}
                    </div>
                )}
                <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 px-4 lg:grid-cols-3 gap-12 xl:max-w-7xl xl:m-auto">
                    {postData.length > 0 &&
                        postData.map((post) => {
                            return (
                                <PostItem
                                    key={post.id}
                                    title={
                                        post.title.length > 25
                                            ? `${post.title.substring(0, 23)}`
                                            : post.title
                                    }
                                    body={
                                        post.body.length > 120
                                            ? `${post.body.substring(0, 117)}...`
                                            : post.body
                                    }
                                    image={
                                        post.image
                                            ? post.image
                                            : `https://picsum.photos/id/${post.id * 2}/500/300`
                                    }
                                    onClick={() => clickHandler(post.id)}
                                    id={post.id}
                                    onDelete={() => deleteHandler(post.id)}
                                    isAdmin={isAdmin}
                                    isLocal={isLocal}
                                    mode={mode}
                                    onEditPost={onEditPost}
                                />
                            );
                        })}
                </div>
            </section>
        </>
    );
}
