import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
    props.store.dispatch(updateNewPostTextActionCreator(""));
  };

  const onPostChange = (postText) => {
    props.store.dispatch(updateNewPostTextActionCreator(postText));
  };

  return (
    <MyPosts
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      updateNewPostText={onPostChange}
      addPost={addPost}
    />
  );
};

export default MyPostsContainer;
