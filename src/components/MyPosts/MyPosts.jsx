import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => <Post postData={p}></Post>);

  const addPost = () => {
    props.addPost();
    props.updateNewPostText("");
  };

  const onPostChange = (event) => {
    props.updateNewPostText(event.target.value);
  };

  return (
    <div className="s.postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onPostChange}
          ></textarea>
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
