import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  getUsersActionCreator,
  setPageActionCreator,
  setTotalUsersCountActionCreator,
  unfollowActionCreator,
} from "../../redux/usersReducer";
import axios from "axios";
import { UsersList } from "./UsersList";

class UsersAPIComponent extends React.Component {
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
            userIcon: user.photos.small,
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
            userIcon: user.photos.small,
            userStatus: user.status,
            followed: user.followed,
          }))
        );
      });
  };

  render() {
    return (
      <UsersList
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    getUsers: (users) => {
      dispatch(getUsersActionCreator(users));
    },
    setPage: (page) => {
      dispatch(setPageActionCreator(page));
    },
    setUsersTotalCount: (count) => {
      dispatch(setTotalUsersCountActionCreator(count));
    },
  };
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersListContainer;
