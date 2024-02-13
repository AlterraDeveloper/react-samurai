import React, {useState} from "react";
import {Preloader} from "../Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";
import ProfileStatus from "../ProfileStatus/ProfileStatusHooks";
import s from "./ProfileInfo.module.css";
import EditProfileForm from "./EditProfileForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    if (!props.userProfile) return <Preloader/>;

    const saveUserProfile = async (userProfileFormData) => {
        const updatedProfile = {...props.userProfile, ...userProfileFormData};
        updatedProfile.contacts = {...props.userProfile.contacts, ...userProfileFormData.contacts};
        props.updateUserProfile(updatedProfile, () => {
            setEditMode(false);
        });
    };

    const isOwner = props.userProfile.userId === props.authData.userId;

    return editMode && props.userProfile ? (
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
                            return props.userProfile.contacts[key] &&
                                <ContactLink key={key} url={props.userProfile.contacts[key]} title={key}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactLink = (props) => {

    let className = null;


    switch (props.title.toLowerCase()) {
        case "facebook":
            className = s.facebook;
            break;
        case "vk":
            className = s.vk;
            break;
        case "twitter":
            className = s.twitter;
            break;
        case "instagram":
            className = s.instagram;
            break;
        case "youtube":
            className = s.youtube;
            break;
        case "github":
            className = s.github;
            break;
        default:
            break;
    }

    return <div className={[s.contact, className].join(" ")}>
        <a href={props.url}
           target={"_blank"}
           rel="noopener noreferrer">
            {!className && props.title[0]}
        </a>
    </div>
}


export default ProfileInfo;
