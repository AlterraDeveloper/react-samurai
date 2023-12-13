import React from "react";
import { Preloader } from "../Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.userProfile) return <Preloader />;

  return (
    <div>
      <div>
        <img
          src={props.userProfile?.photos.large ?? userPhoto}
          alt="Profile logo"
        />
      </div>
      <ProfileStatus status={props.userProfile?.aboutMe} />
    </div>
  );
};

export default ProfileInfo;
