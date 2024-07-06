import React, { useState } from "react";
import SearchForm from "./SearchForm/SearchForm";

import "./PostsHeader_module.css";
import AddForm from "./AddForm/AddForm";

export default function PostsHeader({ blogPosts, setBlogPosts }) {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <section className="postsHeader">
      <h1>Posts</h1>

      <SearchForm />
      <button onClick={() => setShowAddForm(true)} className="addBtn">
        Add Post
      </button>

      {showAddForm && (
        <AddForm
          setShowAddForm={setShowAddForm}
          setBlogPosts={setBlogPosts}
          blogPosts={blogPosts}
        />
      )}
    </section>
  );
}
