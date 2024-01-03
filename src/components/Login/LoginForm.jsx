import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../FormsControls/Input/Input";
import { requiredField } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name="login"
          placeholder="Login"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name="password"
          placeholder="Password"
          type="password"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type="checkbox" />
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
