import React, { useEffect, useState } from 'react'
import Posts from './Posts';

export default function CreatedPost({ isCreatedPost }) {

    const localData = localStorage.getItem('listOfPosts');
    const createdPosts = JSON.parse(localData);

    return (
        <div className="max-w-7xl m-auto">
            <h1 className='text-3xl py-4 text-[#201d75] font-bold mt-5 px-4'>Created Posts</h1>
            <Posts posts={createdPosts === null ? [] : createdPosts} isCreatedPost={isCreatedPost} />
        </div>
    )
}
