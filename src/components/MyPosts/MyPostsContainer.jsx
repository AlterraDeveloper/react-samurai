import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { StoreContext } from "../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      { (store) => {
        const state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
          store.dispatch(updateNewPostTextActionCreator(""));
        };

        const onPostChange = (postText) => {
          store.dispatch(updateNewPostTextActionCreator(postText));
        };

        return (
          <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            updateNewPostText={onPostChange}
            addPost={addPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
