import React from "react";
import Profile from "./Profile";
import { useParams  } from "react-router-dom";
import { connect } from "react-redux";
import {
  setUserProfileActionCreator,
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profileReducer";
import { SocialNetworkAPI } from "../../api/api";


const withRouter = WrappedComponent => props => {
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
    SocialNetworkAPI.getUserProfile(this.props.params.userId)
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
})(withRouter(ProfileContainer));
