import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

export default function PostItem({ title, body, image, id, onDelete }) {
    const loginInfo = localStorage.getItem("user");
    const userLoginData = JSON.parse(loginInfo);

    const deleteHandler = () => {
        const reply = confirm("Are you sure?");
        if (reply) {
            onDelete(id);
        }
    };
    return (
        <div
            className={`flex flex-col shadow-xl md:basis-[46%] lg:basis-[30%] sm:max-w-xl rounded-lg overflow-hidden pb-5 ${userLoginData.role === "admin" && "cursor-pointer"
                }`}
        >
            <img src={image} alt="" className="" />
            <div className="flex flex-col justify-between h-full px-5">
                <div className="">
                    <h1 className="text-2xl font-semibold py-3 text-center">{title}</h1>
                    <p className="text-gray-800 text-lg pb-5 text-justify text-ellipsis ">
                        {body}
                    </p>

                </div>

                {userLoginData.role === "admin" && (
                    <div className="flex justify-end space-x-4">
                        <Button
                            title="Delete"
                            className="bg-red-500 hover:bg-red-600 rounded-md"
                            onClick={deleteHandler}
                        />
                        <Link to={`posts/${id}`}>
                            <Button
                                title="Edit"
                                className="bg-[#201d75] hover:bg-[#121056] rounded-md"
                            />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
