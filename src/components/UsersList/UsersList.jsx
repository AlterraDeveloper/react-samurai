import React from "react";
import s from "./UsersList.module.css";
import User from "../User/User";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class UsersList extends React.Component {

  constructor(props){
    super(props);

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      const apiUsers = response.data.items;
      this.props.getUsers(
        apiUsers.map((user) => ({
          id: user.id,
          userName: user.name,
          userIcon: user.photos.small ?? userPhoto,
          userStatus: user.status,
          followed: user.followed,
          // userSurname: "Kiselev",
          // userLocation: {
          //   country: "Kyrgyzstan",
          //   city: "Bishkek",
          // },
        }))
      );
    });
  }

  render() {
    const users = this.props.users.map((u) => (
      <User
        key={u.id}
        user={u}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      ></User>
    ));

    return (
        <div className={s.users}>{users}</div>
    );
  }
}

export default UsersList;
