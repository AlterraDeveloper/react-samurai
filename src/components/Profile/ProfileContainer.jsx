import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  setUserProfileThunkCreator,
} from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(
      this.props.params.userId ?? this.props.authData.userId
    );
  }

  render() {
    // if (!this.props.authData.isAuth) return <Navigate to="/login" />;

    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

const mapDispatchToProps = {
  setUserProfile: setUserProfileThunkCreator,
  addPost: addPostActionCreator,
  updateNewPostText: updateNewPostTextActionCreator,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
