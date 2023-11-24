import React from "react";
import s from "./User.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div className={s.userBlock}>
      <div className={s.leftBlock}>
        <NavLink to={'/profile/' + props.user.id}>
          <img src={props.user.userIcon ?? userPhoto} alt="" />
        </NavLink>
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
        <div className={s.userLocation}></div>
      </div>
    </div>
  );
};

export default User;
