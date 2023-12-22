import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";
import MyPostForm from "./MyPostForm";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post postData={p} key={p.id}></Post>
  ));

  const addPost = (data) => {
    props.addPost(data.newPostText);
  };

  return (
    <div className="s.postBlock">
      <h3>My posts</h3>
      <MyPostForm onSubmit={addPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
