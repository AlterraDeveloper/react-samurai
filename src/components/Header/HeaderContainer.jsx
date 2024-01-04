import React from "react";
import Header from "./Header";
import {
  logoutThunkCreator,
} from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
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
  logout: logoutThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
