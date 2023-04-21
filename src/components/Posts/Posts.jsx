import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";

export default function Posts({ posts }) {
    const [postData, setPostData] = useState(posts);

    const deleteHandler = (id) => {
        let newList = [...postData];
        setPostData(newList.filter((item) => item.id !== id));
    };

    useEffect(() => {
        setPostData(posts)
    }, [posts])

    return (
        <>
            <section className="my-5">
                {postData.length === 0 && (
                    <p className="text-center font-semibold text-xl">
                        No post created by admin
                    </p>
                )}
                <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 px-4 lg:grid-cols-3 gap-[50px] xl:max-w-7xl xl:m-auto">
                    {postData.map((post) => {
                        return (
                            // <Link to={`posts/${post.id}`} key={post.id}>
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
                                id={post.id}
                                onDelete={deleteHandler}
                            />
                            // </Link>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
