import React from "react";
import s from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      {/* <ProfileInfo/> */}
      <MyPosts newPostText={props.state.newPostText} posts={props.state.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
