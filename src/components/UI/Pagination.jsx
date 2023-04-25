import React, { useState } from 'react'

export default function Pagination() {
    const [page, setPage] = useState(1)
    const totalPage = 10;

    const prevPage = () => {
        setPage(page - 1)
        if (page <= 1) {
            setPage(1)
        }
    }
    const nextPage = () => {
        setPage(page + 1)
        if (page >= totalPage) {
            setPage(totalPage)
        }
    }

    return (
        <>
            <div className="flex gap-6 justify-center my-5 ">
                <button onClick={prevPage}>PREV</button>
                <p>{page} of {totalPage}</p>
                <button onClick={nextPage} >NEXT</button>
            </div>
        </>
    )
}
