import React from "react";
import {Preloader} from "../Preloader/Preloader";
import userPhoto from "../../assets/images/user.png";
import ProfileStatus from "../ProfileStatus/ProfileStatusHooks";

const ProfileInfo = (props) => {
    if (!props.userProfile) return <Preloader/>;

    const uploadProfilePhoto = (e) => {
        props.uploadProfilePhoto(e.target.files[0]);
    }

    return (
        <div>
            <div>
                <img
                    src={props.userProfile?.photos.large ?? userPhoto}
                    alt="Profile logo"
                />
            </div>
            {
                props.userProfile.userId === props.authData.userId &&
                <div>
                    <label htmlFor="profilePhoto">Загрузить фото</label>
                    <input type="file" name="profilePhoto" accept="image/png, image/jpeg"
                           onChange={uploadProfilePhoto}/>
                </div>
            }

            <ProfileStatus
                userProfile={props.userProfile}
                userStatus={props.userStatus}
                updateUserStatus={props.updateUserStatus}
            />
        </div>
    );
};

export default ProfileInfo;
