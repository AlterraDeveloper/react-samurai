import React from "react";
import s from "./UsersList.module.css";
import User from "../User/User";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class UsersList extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users", {
        params: {
          page: this.props.currentPage,
          count: this.props.pageSize,
        },
      })
      .then((response) => {
        const apiUsers = response.data.items;
        this.props.getUsers(
          apiUsers.map((user) => ({
            id: user.id,
            userName: user.name,
            userIcon: user.photos.small ?? userPhoto,
            userStatus: user.status,
            followed: user.followed,
          }))
        );
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (page) => {
    this.props.setPage(page);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users", {
        params: {
          page: page,
          count: this.props.pageSize,
        },
      })
      .then((response) => {
        const apiUsers = response.data.items;
        this.props.getUsers(
          apiUsers.map((user) => ({
            id: user.id,
            userName: user.name,
            userIcon: user.photos.small ?? userPhoto,
            userStatus: user.status,
            followed: user.followed,
          }))
        );
      });
  };

  render() {
    const users = this.props.users.map((u) => (
      <User
        key={u.id}
        user={u}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      ></User>
    ));

    const pages = [];
    const pagesCount = Math.min(
      Math.ceil(this.props.totalUsersCount / this.props.pageSize),
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
              this.props.currentPage === page && s.selectedPage
            }`;
            return (
              <span
                key={page}
                onClick={() => this.onPageChanged(page)}
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
  }
}

export default UsersList;
