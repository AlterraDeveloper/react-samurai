import React from "react";
import Profile from "./Profile";
import { useParams, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  setUserProfileThunkCreator,
} from "../../redux/profileReducer";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks
  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(
      this.props.params.userId ?? this.props.authData.userId
    );
  }

  render() {
    if (!this.props.authData.isAuth) return <Navigate to="/login" />;

    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  authData: state.auth,
});

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileThunkCreator,
  addPost: addPostActionCreator,
  updateNewPostText: updateNewPostTextActionCreator,
})(withRouter(ProfileContainer));
