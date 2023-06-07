import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => <Post postData={p}></Post>);

  const newPostElement = React.createRef();

  const addPost = () => {
    alert(newPostElement.current.value);
  };

  return (
    <div className="s.postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
