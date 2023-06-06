import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {
 

  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount}></Post>
  ));

  return (
    <div className="s.postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;