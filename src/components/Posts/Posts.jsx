import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";

export default function Posts({ posts, isCreatedPost }) {
    const navigate = useNavigate();
    const [postData, setPostData] = useState(posts === null ? [] : posts);

    const deleteHandler = (id) => {
        const filteredData = postData.filter((item) => item.id !== id);
        setPostData(filteredData);
        localStorage.setItem("listOfPosts", JSON.stringify(filteredData));
    };

    useEffect(() => {
        setPostData(posts);
    }, [posts]);

    const clickHandler = (id) => {
        if (isCreatedPost) {
            navigate(`${id}`);
        }
    };

    return (
        <>
            <section className="my-5">
                {isCreatedPost && postData.length === 0 && (
                    <p className="text-center font-semibold text-xl">
                        No post created by admin
                    </p>
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
                                    isCreatedPost={isCreatedPost}
                                />
                            );
                        })}
                </div>
            </section>
        </>
    );
}
