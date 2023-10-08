import { connect } from "react-redux";
import UsersList from "./UsersList";
import {
  followActionCreator,
  getUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
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
  };
};

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

export default UsersListContainer;
