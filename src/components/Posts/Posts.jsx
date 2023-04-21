import React from "react";
import CreatedPostItem from "./CreatedPostItem";
import { Link } from "react-router-dom";

const DUMMY = [
    {
        id: "p1",
        title: "Post 1",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
    {
        id: "p2",
        title: "Post 2",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
    {
        id: "p3",
        title: "Post 3",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
    {
        id: "p4",
        title: "Post 4",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
    {
        id: "p5",
        title: "Post 5",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam eveniet tempora debitis aliquam ducimus laboriosam aut! Consequuntur odit quos iusto?",
    },
];

export default function Posts() {
    return (
        <>
            <section class="my-5">
                <div class="grid grid-cols-3 gap-[50px] xl:max-w-7xl xl:m-auto">
                    {DUMMY.map((post) => {
                        return (
                            <Link to={`posts/${post.id}`}>
                                <CreatedPostItem
                                    key={post.id}
                                    title={post.title}
                                    body={post.body}
                                    image={post.image}
                                    id={post.id}
                                />
                            </Link>

                        );
                    })}
                </div>
            </section>
        </>
    );
}
