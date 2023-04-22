import React from 'react'

export default function Input(props) {
    const { title, type, value, onChange, name, hasError, errorMsg, className } = props
    return (
        <div className={`my-5 ${className}`}>
            <div className="relative">
                <input id={name} type={type} value={value} name={name}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" " onChange={onChange} />
                <label htmlFor={name}
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{title}</label>
            </div>
            {hasError && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
            )}
        </div>
    )
}
