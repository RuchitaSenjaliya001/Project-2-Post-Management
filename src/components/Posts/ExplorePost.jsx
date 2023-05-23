import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { FaSearch } from "react-icons/fa";

export default function ExplorePost({ explorePosts, mode }) {
    const [searchInput, setSearchInput] = useState("");
    const [searchList, setSearchList] = useState(explorePosts);

    const searchChangeHandler = (e) => {
        const filteredPost = explorePosts.filter((post) => {
            if (e.target.value === "") {
                return explorePosts;
            }
            return post.title.includes(e.target.value);
        });
        setSearchInput(e.target.value);
        setSearchList(filteredPost);
    };

    useEffect(() => {
        setSearchList(explorePosts);
    }, [explorePosts]);

    return (
        <div className="max-w-7xl m-auto">
            <div className="flex justify-between items-center mt-5">
                <h1 className={`text-3xl py-4 ${mode === 'dark' ? 'text-white' : 'text-[#201D75]'} font-bold`}>
                    Explore Posts
                </h1>

                <form className="w-1/3 flex items-center">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                            <FaSearch color={`${mode === 'dark' ? '#6366F1' : '#201D75'}`} />
                        </div>
                        <input
                            type="text"
                            className={`border border-gray-400 ${mode === 'dark' ? 'text-white' : 'text-gray-900'} text-sm rounded-md focus:ring-[#6366F1] block w-full pl-10 py-2 ${mode === 'dark' && 'bg-[#0B1120] border-none'}`}
                            placeholder="Search"
                            required
                            onChange={searchChangeHandler}
                        />
                    </div>
                </form>
            </div>

            {searchList.length === 0 && (
                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'} text-center pt-5 text-xl font-semibold`}>
                    No search Found.
                </p>
            )}
            <Posts posts={searchList} mode={mode} />
        </div>
    );
}
