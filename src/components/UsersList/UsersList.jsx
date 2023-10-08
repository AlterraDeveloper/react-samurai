import React from "react";
import s from "./UsersList.module.css";
import User from "../User/User";

const UsersList = (props) => {
  const users = props.users.map((u) => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}></User>);

  return <div className={s.users}>{users}</div>;
};

export default UsersList;
