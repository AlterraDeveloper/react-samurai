import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import {loginViaFormThunkCreator, setCaptchaThunkCreator} from "../../redux/authReducer";
import { compose } from "redux";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const authUser = (data) => {
    props.loginViaForm(data);
  };

  const refreshCaptcha = () => {
    props.refreshCaptcha();
  }

  return props.auth.userId ? (
    <Navigate to={`/profile/${props.auth.userId}`} />
  ) : (
    <div>
      <h1>Login</h1>
      <LoginForm captchaUrl={props.auth.captchaUrl} refreshCaptcha={refreshCaptcha} onSubmit={authUser} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  loginViaForm: loginViaFormThunkCreator,
  refreshCaptcha: setCaptchaThunkCreator
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
