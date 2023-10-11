import { connect } from "react-redux";
import UsersList from "./UsersList";
import {
  followActionCreator,
  getUsersActionCreator,
  setPageActionCreator,
  setTotalUsersCountActionCreator,
  unfollowActionCreator,
} from "../../redux/usersReducer";

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
)(UsersList);

export default UsersListContainer;
