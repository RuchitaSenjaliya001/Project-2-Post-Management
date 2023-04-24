import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form({ enteredData, inputChangeHandler, addPostHandler, isEdit, onClose }) {
    return (
        <>
            <form action="" className="p-5 text-center">
                <Input
                    type="text"
                    title="Enter Title"
                    name="title"
                    value={enteredData.title}
                    onChange={inputChangeHandler}
                />
                {/* <Input type="text" title="Enter Body" name="body" /> */}
                <div className="relative">
                    <textarea
                        name="body"
                        value={enteredData.body}
                        id="body"
                        rows="5"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        onChange={inputChangeHandler}
                    ></textarea>
                    <label
                        htmlFor="body"
                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[16%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                        Enter Body
                    </label>
                </div>
                <Input
                    type="file"
                    title="Enter Image"
                    name="image"
                    // value={enteredData.image}
                    onChange={inputChangeHandler}
                />
                <div className="flex gap-3 justify-center">
                    <Button
                        type="submit"
                        onClick={addPostHandler}
                        title={isEdit ? "Update" : "Add Post"}
                        className="w-1/2 bg-[#201d75]"
                    />
                    {isEdit && <Button
                        type="button"
                        title="Cancel"
                        onClick={onClose}
                        className="w-1/2 bg-red-500"
                    />}
                </div>
            </form>
        </>
    );
}
