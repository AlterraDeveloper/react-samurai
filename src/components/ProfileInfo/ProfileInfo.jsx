import React from "react";
import { Preloader } from "../Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";
import ProfileStatus from "../ProfileStatus/ProfileStatusHooks";

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
      <ProfileStatus
        userProfile={props.userProfile}
        userStatus={props.userStatus}
        updateUserStatus={props.updateUserStatus}
      />
    </div>
  );
};

export default ProfileInfo;
