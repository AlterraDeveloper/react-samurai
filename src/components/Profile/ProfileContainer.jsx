import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { useParams  } from "react-router-dom";
import { connect } from "react-redux";
import {
  setUserProfileActionCreator,
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/profileReducer";


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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params.userId}`)
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
