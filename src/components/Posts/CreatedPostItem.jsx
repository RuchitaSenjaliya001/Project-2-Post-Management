import React from 'react'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'

export default function CreatedPostItem({ title, body, image, id }) {
    return (
        <div class="flex flex-col shadow-xl md:basis-[46%] lg:basis-[30%] sm:max-w-xl rounded-lg overflow-hidden pb-5 cursor-pointer">
            <img src={image} alt="" class="" />
            <div className=' px-5'>
                <h1 class="text-2xl font-semibold py-3 text-center">{title}</h1>
                <p class="text-gray-800 text-lg pb-5 text-justify text-ellipsis ">{body}
                </p>

                {/* <div class="flex justify-end space-x-4">
                    <Button title="Delete" className="bg-red-500 hover:bg-red-600 rounded-md" />
                    <Link to={id}>
                        <Button title="Edit" className="bg-[#201d75] hover:bg-[#121056] rounded-md" />
                    </Link>

                </div> */}
            </div>
        </div >
    )
}
