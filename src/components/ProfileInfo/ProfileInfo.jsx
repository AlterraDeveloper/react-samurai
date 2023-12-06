import React from "react";
import { Preloader } from "../Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.userProfile) return <Preloader />;

  return (
    <div>
      <div>
        <img src={props.userProfile?.photos.large ?? userPhoto} alt="Profile logo" />
      </div>
      <div>{props.userProfile?.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
