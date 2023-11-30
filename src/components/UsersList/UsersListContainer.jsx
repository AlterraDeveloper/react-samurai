import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  getUsersActionCreator,
  setIsUsersLoadingActionCreator,
  setPageActionCreator,
  setTotalUsersCountActionCreator,
  unfollowActionCreator,
} from "../../redux/usersReducer";
import axios from "axios";
import { UsersList } from "./UsersList";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setIsUsersLoading(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users", {
        params: {
          page: this.props.currentPage,
          count: this.props.pageSize,
        },
        withCredentials: true,
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
      })
      .catch((error) => {
        console.error("UsersListContainer => ", error);
      })
      .finally(() => {
        this.props.setIsUsersLoading(false);
      });
  }

  onPageChanged = (page) => {
    this.props.setPage(page);
    this.props.setIsUsersLoading(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users", {
        params: {
          page: page,
          count: this.props.pageSize,
        },
        withCredentials: true,
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
      })
      .catch((error) => {
        console.error("UsersListContainer => ", error);
      })
      .finally(() => {
        this.props.setIsUsersLoading(false);
      });
  };

  render() {
    return (
      <UsersList
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        isUsersLoading={this.props.isUsersLoading}
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
    isUsersLoading: state.usersPage.isUsersLoading,
  };
};

const mapDispatchToProps = {
  follow: followActionCreator,
  unfollow: unfollowActionCreator,
  getUsers: getUsersActionCreator,
  setPage: setPageActionCreator,
  setUsersTotalCount: setTotalUsersCountActionCreator,
  setIsUsersLoading: setIsUsersLoadingActionCreator,
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersListContainer;
