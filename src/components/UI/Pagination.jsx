import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Pagination() {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await response.json()
        }
    }, [])
    const [page, setPage] = useState(1);
    const totalPage = 10;

    const prevPage = () => {
        setPage(page - 1);
        if (page <= 1) {
            setPage(1);
        }
    };
    const nextPage = () => {
        setPage(page + 1);
        if (page >= totalPage) {
            setPage(totalPage);
        }
    };

    return (
        <>
            <div className="flex items-center gap-6 justify-center my-5 ">
                <Button
                    onClick={prevPage}
                    type="button"
                    title="PREV"
                    className="bg-[#201d75] hover:bg-[#121056]"
                ></Button>
                <p>
                    {page} of {totalPage}
                </p>
                <Button
                    onClick={nextPage}
                    type="button"
                    title="NEXT"
                    className="bg-[#201d75] hover:bg-[#121056]"
                ></Button>
            </div>
        </>
    );
}
