import React from "react";
import { connect } from "react-redux";
import {
  setPageActionCreator,
  setUsersThunkCreator,
  unfollowUserThunkCreator,
  followUserThunkCreator,
} from "../../redux/usersReducer";
import { UsersList } from "./UsersList";
import { getCurrentPage, getFollowingsInProgress, getIsUserLoading, getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelectors";

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
    users: getUsers(state),
    pageSize: getPageSize(state),
    isUsersLoading: getIsUserLoading(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingsInProgress: getFollowingsInProgress(state),
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
