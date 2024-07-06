import React, { useState } from "react";

import { ReactComponent as CloseIcon } from "../../../assets/images/close.svg";

import "./EditForm_module.css";
import { POST_URL } from "../../../utils/constants";

export default function EditForm({
  setShowEditForm,
  selectedPost,
  setBlogPosts,
  blogPosts,
}) {
  const [postTitle, setPostTitle] = useState(selectedPost?.title);
  const [postDesc, setPostDesc] = useState(selectedPost?.description);

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value);
  };

  const editPost = (e) => {
    e.preventDefault();

    const updatedPost = {
      ...selectedPost,
      title: postTitle,
      description: postDesc,
    };

    fetch(POST_URL + selectedPost.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((updatedPostFromServer) => {
        const updatePost = blogPosts.map((post) => {
          if (post.id === updatedPostFromServer.id)
            return updatedPostFromServer;
          return post;
        });
        setBlogPosts(updatePost);
        setShowEditForm(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form className="editPostForm" onSubmit={editPost}>
        <button onClick={() => setShowEditForm(false)} className="hideBtn">
          <CloseIcon />
        </button>

        <h2> Edit Post</h2>
        <div>
          <input
            type="text"
            className="addFormInput"
            placeholder="Title post"
            name="postTitle"
            value={postTitle}
            onChange={handlePostTitleChange}
            required
          />
        </div>
        <div>
          <textarea
            className="editFormInput"
            name="postDescription"
            placeholder="Description post"
            value={postDesc}
            onChange={handlePostDescChange}
            rows={8}
            required
          />
        </div>
        <div>
          <button className="editBtn" type="submit">
            Save Post
          </button>
        </div>
      </form>
      <div onClick={() => setShowEditForm(false)} className="overlay"></div>
    </>
  );
}
