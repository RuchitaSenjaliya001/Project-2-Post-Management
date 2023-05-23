import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function Pagination({
    prevPage,
    nextPage,
    currentPage,
    mode,
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
                    className={`${mode === 'dark' ? 'bg-[#6366F1] hover:bg-[#454bf7]' : 'bg-[#201D75] hover:bg-[#121056]'} disabled:bg-gray-400 disabled:cursor-not-allowed`}
                ></Button>
                <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    {currentPage} of {totalPage}
                </p>
                <Button
                    onClick={nextPage}
                    disabled={currentPage === 10}
                    type="button"
                    title="NEXT"
                    className={`${mode === 'dark' ? 'bg-[#6366F1] hover:bg-[#454bf7]' : 'bg-[#201D75] hover:bg-[#121056]'} disabled:bg-gray-400 disabled:cursor-not-allowed`}
                ></Button>
            </div>
        </>
    );
}
