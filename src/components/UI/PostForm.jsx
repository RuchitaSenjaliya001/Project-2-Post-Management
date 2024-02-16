import React from "react";
import Input from "./Input";
import { Form } from "react-router-dom";
import Button from "./Button";
import { toast } from "react-toastify";

export default function PostForm({
  enteredData,
  inputChangeHandler,
  addPostHandler,
  isEdit,
  mode,
  onClose,
}) {
  const notify = () => {
    toast.success("Post added successfully");
  };
  return (
    <>
      <Form method="post" className="p-5 text-center" onSubmit={addPostHandler}>
        <Input
          type="text"
          title="Enter Title"
          name="title"
          value={enteredData.title}
          onChange={inputChangeHandler}
        />
        <div className="relative">
          <textarea
            name="body"
            value={enteredData.body}
            id="body"
            rows="5"
            className={`block px-2.5 ${
              mode === "dark"
                ? "bg-[#0B1120] text-white"
                : "bg-transparent text-gray-900"
            } pb-2.5 pt-4 w-full text-sm rounded-md border-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            onChange={inputChangeHandler}></textarea>
          <label
            htmlFor="body"
            className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
              mode === "dark" ? "bg-transparent" : "bg-white"
            } px-2 peer-focus:px-2 peer-focus:text-blue-600 ${
              mode === "dark"
                ? "peer-focus:bg-[#1A2338]"
                : "peer-focus:bg-slate-100"
            } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[16%] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}>
            Enter Body
          </label>
        </div>
        <Input
          type="file"
          title="Enter Image"
          name="image"
          onChange={inputChangeHandler}
        />
        <div className="flex gap-3 justify-center">
          <Button
            type="submit"
            onClick={!isEdit ? notify : undefined}
            title={isEdit ? "Update" : "Add Post"}
            className={`w-1/2 ${
              mode === "light"
                ? "bg-[#201D75] hover:bg-[#201D75]"
                : "bg-[#6366F1] hover:bg-[#5157f7]"
            }  py-2 mt-3`}
          />
          {isEdit && (
            <Button
              type="button"
              title="Cancel"
              onClick={onClose}
              className="w-1/2 py-2 bg-red-500 hover:bg-red-600 mt-3"
            />
          )}
        </div>
      </Form>
    </>
  );
}
