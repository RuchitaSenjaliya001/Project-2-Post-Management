import React from "react";

export default function Footer({ mode }) {
    return (
        <div className={`${mode === 'dark' ? 'bg-[#0B1120]' : 'bg-[#201D75]'} py-5 text-white text-center text-lg `}>
            <p>
                &#169; 2023. All rights are reserved
                <span className={`font-bold ${mode === 'dark' && 'text-[#6366F1]'}`}> BlogPost</span>
            </p>
        </div>
    );
}
