import React from "react";
import s from "./UsersList.module.css";
import User from "../User/User";
import { Preloader } from "../Preloader/Preloader";

export const UsersList = (props) => {
  const users = props.users.map((u) => (
    <User
      key={u.id}
      user={u}
      followingsInProgress={props.followingsInProgress}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
    ></User>
  ));

  const pages = [];
  const pagesCount = Math.min(
    Math.ceil(props.totalUsersCount / props.pageSize),
    10
  );
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div className={s.usersList}>
      <div className={s.pages}>
        {pages.map((page) => {
          const classes = `${s.page} ${
            props.currentPage === page && s.selectedPage
          }`;
          return (
            <span
              key={page}
              onClick={(event) => {
                props.onPageChanged(Number(event.target.innerText));
              }}
              className={classes}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.isUsersLoading ? (
        <Preloader />
      ) : (
        <div className={s.users}>{users}</div>
      )}
    </div>
  );
};
