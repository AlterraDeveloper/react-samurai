import React from "react";
import s from "./User.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { followUser, unfollowUser } from "../../api/api";

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
              props.setFollowingsInProgress(props.user.id);
              unfollowUser(props.user.id)
                .then((response) => {
                  console.log(response);
                  if (response.data.resultCode === 0) {
                    props.unfollow(props.user.id);
                  }
                })
                .catch((error) => {
                  console.error("UNFOLLOW API => ", error);
                })
                .finally(() => {
                  props.setFollowingsInProgress(false);
                });
            }}
          >
            unfollow
          </button>
        ) : (
          <button
          disabled={props.followingsInProgress.some(id => id === props.user.id)}
            onClick={() => {
              props.setFollowingsInProgress(props.user.id);
              setTimeout(() => {
                followUser(props.user.id)
                  .then((response) => {
                    console.log(response);
                    if (response.data.resultCode === 0) {
                      props.follow(props.user.id);
                    }
                  })
                  .catch((error) => {
                    console.error("FOLLOW API => ", error);
                  })
                  .finally(() => {
                    props.setFollowingsInProgress(props.user.id);
                  });
              }, 3000);
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
