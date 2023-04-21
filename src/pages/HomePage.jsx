import React from 'react'
import Posts from '../components/Posts/Posts'

export default function HomePage() {
    return (
        <div className="max-w-7xl m-auto">
            <div className="">
                <h1 className='text-3xl py-4 text-center text-[#201d75] font-bold '>Created Posts</h1>
                <Posts />
            </div>
            <div className="">
                <h1 className='text-3xl py-4 text-center text-[#201d75] font-bold '>Explore Posts</h1>
                <Posts />
            </div>

        </div>
    )
}
