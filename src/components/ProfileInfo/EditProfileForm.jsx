import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../assets/images/user.png";

const EditProfileForm = (props) => {

    const uploadProfilePhoto = (e) => {
        props.uploadProfilePhoto(e.target.files[0]);
    }

    console.log(props.userProfile);

    return (
        <form onSubmit={props.handleSubmit}>

            <div className={s.profileInfoWrapper}>
                <div className={s.profileInfoLeft}>
                    <div className={s.profileLogo}>
                        <img
                            src={props.userProfile?.photos.large ?? userPhoto}
                            alt="Profile logo"
                        />
                    </div>
                    <div>
                        <label htmlFor="profilePhoto">Загрузить фото</label>
                        <input type="file" name="profilePhoto" accept="image/png, image/jpeg"
                               onChange={uploadProfilePhoto}/>
                    </div>
                    <div>
                        <b>Full name:</b>
                        <Field component="input" placeholder={"Full name"} type={"text"} name={"fullName"}></Field>
                    </div>
                    <div>
                        <b>About me:</b>
                        <Field component="input" placeholder={"about me"} type={"text"} name={"aboutMe"}></Field>
                    </div>
                    <div className={s.editBtn}>
                        <button onClick={() => {

                        }}>Save
                        </button>
                    </div>

                </div>
                <div className={s.profileInfoRight}>
                    <div className={s.profileInfoJob}>
                        <div className={s.cardTitle}>Job details</div>
                        <div>
                            <label htmlFor="lookingForAJob">
                                <b>Looking for a job:</b>
                            </label>
                            <Field component="input"
                                   type={"checkbox"}
                                   name={"lookingForAJob"}></Field>
                        </div>
                        <div>
                            <b>Looking for a job description:</b><Field component="textarea"
                                                                        name={"lookingForAJobDescription"}></Field>
                        </div>
                    </div>
                    <div className={s.profileInfoContacts}>
                        <div className={s.cardTitle}>Contacts</div>
                        <div className={s.contacts}>
                            {
                                Object.keys(props.userProfile.contacts).map(key => {
                                    return (<div key={key}>
                                        <b>{key}:</b>
                                        <Field component="input" placeholder={`${key} link`} type={"text"}
                                               name={`contacts.${key}`}></Field>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <input type="submit" value={"Save"}/>
        </form>
    )
        ;
};

export default reduxForm({
    form: "editProfileForm",
    enableReinitialize: true
})(EditProfileForm);
