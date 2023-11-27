import Post from "./Post";
import Comment from "./Comment"
import LikeButton from "./LikeButton";
import Navbar from "./Navbar";

const Feed = () => {

  // Retrieve existing postArray from local storage or initialize an empty array
  const postArray = JSON.parse(localStorage.getItem("postArray")) || [];

  // Reverse the order of the posts so that newest comes first
  const reversedPostArray = postArray.reverse();

  // Retrieve existing commentArray from local storage or initialize an empty array
  const commentArray = JSON.parse(localStorage.getItem("commentArray")) || [];

  return (
    <>
      <Navbar />
      <div className="feed">
        <div className="post-form">
          <Post />
        </div>
        <div className="post-list">
          {reversedPostArray.map((post) => (
            <div className="post" key={post.postId}>
              <div className="post-header">
                <img src={post.avatar} className="post-avatar" alt="Avatar"></img>
                <h3>{post.name}</h3>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              <div className="post-extras">
                <div className="post-footer">
                  <LikeButton postId={post.postId} className="like-butoon" />
                  <Comment postId={post.postId.toString()} />
                </div>
                <div className="comment-list">
                  {commentArray
                    .filter((comment) => comment.postId.toString() === post.postId.toString())
                    .map((comment) => (
                      <div className="comment" key={comment.commentId.toString()}>
                        <div className="comment-header">
                          <img src={comment.avatar} className="comment-avatar" alt="Avatar"></img>
                          <h4>{comment.name}</h4>
                        </div>
                        <div className="comment-content">
                          <p>{comment.content}</p>
                        </div>
                        <div className="comment-extras">
                          <LikeButton />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;