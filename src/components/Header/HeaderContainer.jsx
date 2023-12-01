import React from "react";
import Header from "./Header";
import { setAuthUserDataActionCreator } from "../../redux/authReducer";
import { connect } from "react-redux";
import { authMe } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authMe()
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id: userId, login, email } = { ...response.data.data };
          this.props.setUserData(userId, email, login);
        } else {
          this.props.setUserData(null, null, "Eugene");
        }
      })
      .catch((error) => {
        console.error("HeaderContainer => ", error);
      })
      .finally(() => {});
  }

  render() {
    return <Header {...this.props}></Header>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  setUserData: setAuthUserDataActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
