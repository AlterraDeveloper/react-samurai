import React from "react";
import s from "./UsersList.module.css";
import User from "../User/User";

export const UsersList = (props) => {
  const users = props.users.map((u) => (
    <User
      key={u.id}
      user={u}
      follow={props.follow}
      unfollow={props.unfollow}
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
    <div>
      <div className={s.pages}>
        {pages.map((page) => {
          const classes = `${s.page} ${
            props.currentPage === page && s.selectedPage
          }`;
          return (
            <span
              key={page}
              onClick={() => props.onPageChanged(page)}
              className={classes}
            >
              {page}
            </span>
          );
        })}
      </div>
      <div className={s.users}>{users}</div>
    </div>
  );
};
