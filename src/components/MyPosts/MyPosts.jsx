import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profileReducer";

const MyPosts = (props) => {
  const postsElements = props.state.posts.map((p) => (
    <Post postData={p}></Post>
  ));

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
    props.store.dispatch(updateNewPostTextActionCreator(""));
  };

  const onPostChange = (event) => {
    props.store.dispatch(updateNewPostTextActionCreator(event.target.value));
  };

  return (
    <div className="s.postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.state.newPostText}
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
