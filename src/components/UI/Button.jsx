import React from "react";

export default function Button({ title, type, className, onClick, disabled }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-5 py-2 text-white text-center rounded-md ${className}`}
        >
            {title}
        </button>
    );
}
