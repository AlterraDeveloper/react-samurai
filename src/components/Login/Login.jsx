import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { loginViaFormThunkCreator } from "../../redux/authReducer";
import { compose } from "redux";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const authUser = (data) => {
    props.loginViaForm(data);
  };

  return props.auth.userId ? (
    <Navigate to={`/profile/${props.auth.userId}`} />
  ) : (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={authUser} />
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
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
