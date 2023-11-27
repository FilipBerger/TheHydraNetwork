import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Comment = ({ postId }) => {
  const [content, setContent] = useState("");

  // Handles the form submission event
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve current user data from local storage
    const currentUser = JSON.parse(localStorage.getItem("userValidated"));

    // Retrieve existing post data from local storage or initialize an empty array
    const commentArray = JSON.parse(localStorage.getItem("commentArray")) || [];

    // Generates a unique ID for the comment
    const commentId = uuid();

    // Create new comment object
    const comment = {
      name: currentUser.firstName + " " + currentUser.lastName,
      avatar: currentUser.avatar,
      content: content,
      postId: postId.toString(),
      commentId: commentId
    };

    // Add the new comment to the array
    commentArray.push(comment);

    // Store the array in local storage
    localStorage.setItem("commentArray", JSON.stringify(commentArray));

    // Reload the page to update changes
    window.location.reload();
  };

  return (
    <div className="comment-section">
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Add a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
};

export default Comment;