import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Pagination({
    prevPage,
    nextPage,
    currentPage,
    totalPage,
}) {
    return (
        <>
            <div className="flex items-center gap-6 justify-center my-5 ">
                <Button
                    disabled={currentPage === 1}
                    onClick={prevPage}
                    type="button"
                    title="PREV"
                    className="bg-[#201d75] hover:bg-[#121056] disabled:bg-[#7472ad] disabled:cursor-not-allowed"
                ></Button>
                <p>
                    {currentPage} of {totalPage}
                </p>
                <Button
                    onClick={nextPage}
                    disabled={currentPage === 10}
                    type="button"
                    title="NEXT"
                    className="bg-[#201d75] hover:bg-[#121056] disabled:bg-[#7472ad] disabled:cursor-not-allowed"
                ></Button>
            </div>
        </>
    );
}
