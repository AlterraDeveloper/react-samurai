import React from "react";
import s from "./User.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const User = (props) => {
  return (
    <div className={s.userBlock}>
      <div className={s.leftBlock}>
        <NavLink to={"/profile/" + props.user.id}>
          <img src={props.user.userIcon ?? userPhoto} alt="" />
        </NavLink>
        {props.user.followed ? (
          <button
            onClick={() => {
              
              axios
                .delete(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
                  {
                    withCredentials: true,
                  }
                )
                .then((response) => {
                  console.log(response);
                  if (response.data.resultCode === 0) {
                    props.unfollow(props.user.id);
                  }
                })
                .catch((error) => {
                  console.error("UNFOLLOW API => ", error);
                });
            }}
          >
            unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              axios
                .post(
                  `https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`,
                  null,
                  {
                    withCredentials: true,
                  }
                )
                .then((response) => {
                  console.log(response);
                  if (response.data.resultCode === 0) {
                    props.follow(props.user.id);
                  }
                })
                .catch((error) => {
                  console.error("FOLLOW API => ", error);
                });
            }}
          >
            follow
          </button>
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
