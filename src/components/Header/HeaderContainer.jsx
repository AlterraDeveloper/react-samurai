import React from "react";
import Header from "./Header";
import { logoutThunkCreator, setAuthUserDataThunkCreator } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setUserData();
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
  setUserData: setAuthUserDataThunkCreator,
  logout: logoutThunkCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
