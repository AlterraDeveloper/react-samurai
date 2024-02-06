import React, { useState } from "react";
import { Preloader } from "../Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";
import ProfileStatus from "../ProfileStatus/ProfileStatusHooks";
import s from "./ProfileInfo.module.css";
import EditProfileForm from "./EditProfileForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.userProfile) return <Preloader />;

  const saveUserProfile = (userProfileFormData) => {
    // console.log({...props.userProfile, ...userProfileFormData });
    props.updateUserProfile({...props.userProfile, ...userProfileFormData });
    setEditMode(false);
  };

  const isOwner = props.userProfile.userId === props.authData.userId;

  return editMode ? (
    <EditProfileForm
      onSubmit={saveUserProfile}
      uploadProfilePhoto={props.uploadProfilePhoto}
      userProfile={props.userProfile}
      initialValues={props.userProfile}
    />
  ) : (
    <div className={s.profileInfoWrapper}>
      <div className={s.profileInfoLeft}>
        <div className={s.profileLogo}>
          <img
            src={props.userProfile?.photos.large ?? userPhoto}
            alt="Profile logo"
          />
        </div>
        <div className={s.profileField}>
          <b>My profile:</b> <span>{props.userProfile.fullName}</span>
        </div>
        <div className={s.profileField}>
          <b>About me:</b> <span>{props.userProfile.aboutMe}</span>
        </div>
        {isOwner && !editMode && (
          <div className={s.editBtn}>
            <button
              onClick={() => {
                setEditMode(true);
              }}
            >
              Edit
            </button>
          </div>
        )}
        {isOwner && (
          <ProfileStatus
            userProfile={props.userProfile}
            userStatus={props.userStatus}
            updateUserStatus={props.updateUserStatus}
          />
        )}
      </div>
      <div className={s.profileInfoRight}>
        <div className={s.profileInfoJob}>
          <div className={s.cardTitle}>Job details</div>
          <div className={s.profileField}>
            <b>Looking for a job:</b>{" "}
            <span>{props.userProfile.lookingForAJob ? "YES" : "NO"}</span>
          </div>
          <div className={s.profileField}>
            <b>Job description:</b>{" "}
            <span>{props.userProfile.lookingForAJobDescription}</span>
          </div>
        </div>
        <div className={s.profileInfoContacts}>
          <div className={s.cardTitle}>Contacts</div>
          <div className={s.contacts}>
            {Object.keys(props.userProfile.contacts).map((key) => {
              props.userProfile.contacts[key] && (
                <div key={key} className={s.contact}>
                  <a href={props.userProfile.contacts[key]}>{key[0]}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
