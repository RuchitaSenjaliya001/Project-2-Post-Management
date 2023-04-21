import React from 'react'
import Input from '../components/UI/Input'

export default function NewPost() {
    return (
        <>
            <h1 className='text-center text-3xl font-bold'>Let's Create New Post</h1>
            <div className='max-w-3xl m-auto my-4 shadow-lg flex flex-col justify-center'>
                <form action="" className='p-5'>
                    <Input type="text" title="Enter Title" className="w-full" />
                    <Input type="text" title="Enter Body" className="w-full" />
                    <Input type="text" title="Enter Image" className="w-full" />
                </form>
            </div>
        </>
    )
}
