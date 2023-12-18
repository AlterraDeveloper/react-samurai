import React from "react";
import { connect } from "react-redux";
import {
  setPageActionCreator,
  setUsersThunkCreator,
  unfollowUserThunkCreator,
  followUserThunkCreator,
} from "../../redux/usersReducer";
import { UsersList } from "./UsersList";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.setPage(page);
    this.props.setUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <UsersList
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        isUsersLoading={this.props.isUsersLoading}
        followingsInProgress={this.props.followingsInProgress}
        onPageChanged={this.onPageChanged}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    isUsersLoading: state.usersPage.isUsersLoading,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followingsInProgress: state.usersPage.followingsInProgress,
  };
};

const mapDispatchToProps = {
  setPage: setPageActionCreator,
  setUsers: setUsersThunkCreator,
  unfollowUser: unfollowUserThunkCreator,
  followUser: followUserThunkCreator
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);

export default UsersListContainer;
