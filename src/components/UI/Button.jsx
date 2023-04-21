import React from "react";

export default function Button({ title, className, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`px-5 py-2 text-white text-center rounded-md ${className}`}
        >
            {title}
        </button>
    );
}
