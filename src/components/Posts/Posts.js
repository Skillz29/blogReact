import React, { useState } from "react";

import PostsHeader from "./PostsHeader/PostsHeader";
import Post from "./Post/Post";

import { POST_URL } from "../../utils/constants";

import "./Posts_module.css";
// import { setPostsToLocalStorage } from "../../utils/helpers";
import EditForm from "./EditForm/EditForm";
import { useFetchPosts } from "../../utils/hooks";

export default function Posts() {
  const { blogPosts, setBlogPosts, isLoading, error } = useFetchPosts(POST_URL);

  const likePost = (pos) => {
    const updatedPosts = [...blogPosts];

    updatedPosts[pos].liked = !updatedPosts[pos].liked;

    fetch(POST_URL + updatedPosts[pos].id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedPosts[pos]),
    })
      .then((res) => res.json())
      .then((updatedPostsFromServer) => {
        updatedPosts[pos] = updatedPostsFromServer;
        setBlogPosts(updatedPosts);
      })
      .catch((error) => console.log(error));
  };

  const deletePost = (postId) => {
    const isDelete = window.confirm("Удалить пост?");

    if (isDelete) {
      fetch(POST_URL + postId, { method: "DELETE" })
        .then(() =>
          setBlogPosts(blogPosts.filter((post) => post.id !== postId))
        )
        .catch((error) => console.log(error));
    }

    // setBlogPosts(updatedPosts);
  };

  const [selectedPost, setSelectedPost] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  const selectPost = (post) => {
    setSelectedPost(post);
    setShowEditForm(true);
  };

  if (isLoading) return <h1>Получаем данные с сервера</h1>;

  if (!Array.isArray(blogPosts)) return <h1> Не приходит массив данных</h1>;

  if (error) return <h1>{error.message}</h1>;

  return (
    <div className="postsWrapper">
      <PostsHeader blogPosts={blogPosts} setBlogPosts={setBlogPosts} />

      <section className="posts">
        {blogPosts.map((post, pos) => {
          return (
            <Post
              key={post.id}
              title={post.title}
              description={post.description}
              liked={post.liked}
              thumbnail={post.thumbnail}
              likePost={() => likePost(pos)}
              deletePost={() => deletePost(post.id)}
              selectPost={() => selectPost(post)}
            />
          );
        })}
      </section>
      {showEditForm && (
        <EditForm
          selectedPost={selectedPost}
          setShowEditForm={setShowEditForm}
          setBlogPosts={setBlogPosts}
          blogPosts={blogPosts}
        />
      )}
    </div>
  );
}
