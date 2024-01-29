import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    setUserProfileThunkCreator,
    setStatusThunkCreator,
    getStatusThunkCreator, uploadProfilePhotoThunkCreator,
} from "../../redux/profileReducer";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        this.props.setUserProfile(
            this.props.params.userId ?? this.props.authData.userId
        );
        this.props.getUserStatus(
            this.props.params.userId ?? this.props.authData.userId
        );
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params?.userId !== this.props.params?.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    authData: state.auth,
});

const mapDispatchToProps = {
    setUserProfile: setUserProfileThunkCreator,
    addPost: addPostActionCreator,
    updateUserStatus: setStatusThunkCreator,
    getUserStatus: getStatusThunkCreator,
    uploadProfilePhoto: uploadProfilePhotoThunkCreator
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer);
