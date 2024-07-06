import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../../../assets/images/close.svg";

import "./AddForm_module.css";
import { POST_URL } from "../../../../utils/constants";

export default function AddForm({setShowAddForm, blogPosts, setBlogPosts}) {

  const [postTitle, setPostTitle] = useState("");
  const [postDesc, setPostDesc] = useState("");

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const handlePostDescChange = (e) => {
    setPostDesc(e.target.value)
  }

  const createPost = (e) => {
    e.preventDefault();

    const newPost = {
      title: postTitle,
      description: postDesc,
      liked: false,
      thumbnail: blogPosts[0].thumbnail,
    }

    fetch(POST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json()"
      },
      body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(newPostFromServer => {
      setBlogPosts([...blogPosts, newPostFromServer]);
      setShowAddForm(false)
    })
    .catch(error => console.log(error))
  }

  return (
    <>
    <form className="addPostForm" onSubmit={createPost}>
      <button className="hideBtn" onClick={() => setShowAddForm(false)}>
        <CloseIcon />
      </button>

      <h2> New Post</h2>
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
          className="addFormInput"
          name="postDescription"
          placeholder="Description post"
          value={postDesc}
          onChange={handlePostDescChange}
          rows={8}
          required
          />
      </div>
      <div>
        <button className="addBtn" type="submit">
          Add Post
        </button>
      </div>
    </form>
    <div onClick={() => setShowAddForm(false)} className="overlay"></div>
  </>
  );
}
