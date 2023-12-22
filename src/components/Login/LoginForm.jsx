import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} name="login" placeholder="Login" />
      </div>
      <div>
        <Field
          component={"input"}
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type="checkbox" />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
