import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Post = () => {
  const [content, setContent] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing post data from local storage or initialize an empty array
    const postArray = JSON.parse(localStorage.getItem("postArray")) || [];

    // Retrieve data for the current user from local storage
    const currentUser = JSON.parse(localStorage.getItem("userValidated"));

    // Generates a unique ID for the post
    const postId = uuid();

    // Create post object
    const post = {
      postId: postId,
      avatar: currentUser.avatar,
      name: currentUser.firstName + " " + currentUser.lastName,
      content: content,
    };

    // Add the new form data to the existing array
    postArray.push(post);

    // Update the postArray in local storage
    localStorage.setItem("postArray", JSON.stringify(postArray));

    // Reload the page to update changes
    window.location.reload();
  };

  return (
    <>
      <div className="create-post">
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="What would you like to say?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button>Create Post</button>
        </form>
      </div>
    </>
  );
}

export default Post;