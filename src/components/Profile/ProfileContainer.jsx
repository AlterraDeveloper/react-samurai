import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {
  setUserProfileActionCreator,
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then((response) => {
        this.props.setUserProfile(response.data);
      })
      .catch((error) => {
        console.error("ProfileContainer => ", error);
      })
      .finally(() => {});
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileActionCreator,
  addPost: addPostActionCreator,
  updateNewPostText: updateNewPostTextActionCreator,
})(ProfileContainer);
