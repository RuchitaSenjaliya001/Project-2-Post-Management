import React, { useEffect, useState } from 'react'
import Button from '../UI/Button'
import { useParams } from 'react-router-dom'

export default function PostDetail({ postData }) {
    const [currentPost, setCurrentPost] = useState({})
    const params = useParams();

    useEffect(() => {
        const filteredPost = postData.filter((data) => data.id == params.postId);
        setCurrentPost(...filteredPost)
    }, [params])

    return (
        <>
            <div className="max-w-7xl m-auto flex gap-8 border-2 justify-between shadow-xl rounded-lg mt-10 p-5">
                <div className="w-1/2">
                    <img src={currentPost.image} alt="" className='w-full h-[400px] object-cover rounded-md' />
                </div>
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="">
                        <h1 className='text-3xl font-bold py-2'>{currentPost.title}</h1>
                        <p className='text-md py-2'>{currentPost.body}</p>
                    </div>
                    <div className="flex justify-end space-x-5 my-4">
                        <Button
                            title="Delete"
                            className="bg-red-500 hover:bg-red-600"
                        />
                        <Button
                            title="Edit"
                            className="bg-[#201d75] hover:bg-[#121056]"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
