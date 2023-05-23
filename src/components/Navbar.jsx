import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsCloudSunFill } from "react-icons/bs";

import ModeContext from "../context/mode-context";

export default function Navbar({ showModalHandler }) {
    const userLoginData = JSON.parse(localStorage.getItem("user"));
    const ctx = useContext(ModeContext)

    return (
        <>

            <nav className={`w-full ${ctx.mode === 'dark' ? 'bg-[#0B1120]' : 'bg-[#201D75]'}  text-white p-3`}>
                <div className="max-w-7xl text-md m-auto flex justify-between items-center">
                    <div className="text-3xl font-bold">
                        <Link to="/">BlogPost</Link>
                    </div>
                    <div className="">
                        <ul className={`flex space-x-3 md:flex sm:space-x-6 items-center  `}>
                            <li className="text-sm sm:text-base">
                                <NavLink
                                    className={({ isActive }) => (isActive ? "font-bold" : "")}
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            {userLoginData.role === "admin" && (
                                <li className={`text-sm sm:text-base`}>
                                    <NavLink
                                        className={({ isActive }) => (isActive ? "font-bold" : "")}
                                        to="/new-post"
                                    >
                                        New post
                                    </NavLink>
                                </li>
                            )}
                            <li className=" text-sm sm:text-base">
                                <button onClick={showModalHandler}>Logout</button>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-md hover:cursor-pointer" onClick={ctx.toggleMode}>
                        {ctx.mode === 'dark' ? <BsCloudSunFill size={20} /> : <BsFillMoonStarsFill size={18} />}
                        <p>{ctx.mode === 'dark' ? 'Light' : 'Dark'}</p>
                    </div>
                </div>
            </nav>
        </>
    );
}
