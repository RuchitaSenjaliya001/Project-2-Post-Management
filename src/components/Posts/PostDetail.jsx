import React, { useContext, useEffect, useState } from "react";
import Button from "../UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmationAlert from "../ConfirmationAlert";
import EditModal from "../EditModal";
import ModeContext from "../../context/mode-context";

export default function PostDetail() {
  const [currentPost, setCurrentPost] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [editModal, setEditModal] = useState({ show: false, id: null });
  const [showModal, setShowModal] = useState(false);

  const ctx = useContext(ModeContext);

  const postData = JSON.parse(localStorage.getItem("listOfPosts"));
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const filteredPost = postData.filter((data) => data.id == params.postId);
    setCurrentPost(...filteredPost);
  }, [params, localStorage]);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const editShowModalHandler = (id) => {
    setEditModal({ show: true, id: id });
  };

  const editHideModalHandler = () => {
    setEditModal({ show: false, id: null });
  };

  const deletePostHandler = (id) => {
    const updated = postData.filter((post) => post.id !== id);
    localStorage.setItem("listOfPosts", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <>
      {showModal && (
        <ConfirmationAlert
          message="Are you sure you want to delete this post?"
          onClose={hideModalHandler}
          onProceed={() => deletePostHandler(currentPost?.id)}
        />
      )}
      {editModal.show && (
        <EditModal onClose={editHideModalHandler} id={editModal.id} />
      )}
      <div
        className={`${
          ctx.mode === "dark" &&
          " bg-gradient-to-b from-[#1a2338] via-[#1b3576] to-[#1a2338]"
        } pt-10 w-full min-h-screen`}>
        <div
          className={`${
            ctx.mode === "dark" ? "bg-[#0B1120] text-white" : "border-2"
          } max-w-7xl m-auto flex gap-8  justify-between shadow-xl rounded-lg p-5`}>
          <div className="w-1/2">
            <img
              src={currentPost?.image}
              alt=""
              className="w-full h-[400px] object-cover rounded-md"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="">
              <h1 className="text-3xl font-bold py-2">{currentPost?.title}</h1>
              <p className="text-md py-2">{currentPost?.body}</p>
            </div>
            {user.role === "admin" && (
              <div className="flex justify-end space-x-5 my-4">
                <Button
                  title="Delete"
                  onClick={showModalHandler}
                  className="bg-[#ef4444] hover:bg-[#dc2626]"
                />
                <Button
                  title="Edit"
                  className={`${
                    ctx.mode === "dark"
                      ? "bg-[#6366F1] hover:bg-[#454bf7]"
                      : "bg-[#201D75] hover:bg-[#121056]"
                  }`}
                  onClick={() => editShowModalHandler(currentPost?.id)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
