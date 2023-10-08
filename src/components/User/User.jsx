import React from "react";
import s from "./User.module.css";

const User = (props) => {
  return (
    <div className={s.userBlock}>
      <div className={s.leftBlock}>
        <img src={props.user.userIcon} alt="" />
        {props.user.followed ? (
          <button onClick={() => props.unfollow(props.user.id)}>
            unfollow
          </button>
        ) : (
          <button onClick={() => props.follow(props.user.id)}>follow</button>
        )}
      </div>
      <div className={s.rightBlock}>
        <div className={s.userInfo}>
          <span>{props.user.userName}</span>
          <span>{props.user.userStatus}</span>
        </div>
        <div className={s.userLocation}>
          {/* <span>{props.user.userLocation.country},</span>
          <span>{props.user.userLocation.city}</span> */}
        </div>
      </div>
    </div>
  );
};

export default User;
