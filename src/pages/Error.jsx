import React from 'react'
import { useRouteError } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Error() {
    const error = useRouteError();
    return (
        <React.Fragment>
            <Navbar />
            <div className="text-center py-4">
                <h1 className='text-3xl font-bold'>An Error Occurred</h1>
                <p className='text-[#201d75]'>Something went wrong!</p>
            </div>
        </React.Fragment>
    )
}
