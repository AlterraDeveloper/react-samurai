import React from "react";
import Header from "./Header";
import { setAuthUserDataThunkCreator } from "../../redux/authReducer";
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
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
