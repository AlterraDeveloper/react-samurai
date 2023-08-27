import React from "react";
import s from "./Profile.module.css";
import MyPosts from "../MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div>
      {/* <ProfileInfo/> */}
      <MyPosts state={props.state} store={props.store}/>
    </div>
  );
};

export default Profile;
