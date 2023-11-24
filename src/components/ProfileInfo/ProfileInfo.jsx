import React from "react";
import { Preloader } from "../Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.userProfile) return <Preloader />;

  return (
    <div>
      <div>
        <img src={props.userProfile?.photos.large} alt="Profile logo" />
      </div>
      <div>{props.userProfile?.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
