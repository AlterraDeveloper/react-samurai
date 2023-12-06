import React from "react";
import Profile from "./Profile";
import { useParams  } from "react-router-dom";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
  setUserProfileThunkCreator,
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
    this.props.setUserProfile(this.props.params.userId);
   
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

export default connect(mapStateToProps, {
  setUserProfile: setUserProfileThunkCreator,
  addPost: addPostActionCreator,
  updateNewPostText: updateNewPostTextActionCreator,
})(withRouter(ProfileContainer));
