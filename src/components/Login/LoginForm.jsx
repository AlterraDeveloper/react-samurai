import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/Input/Input";
import {requiredField} from "../../utils/validators/validators";
import s from "../FormsControls/FormControl/FormControl.module.css";
import styles from "./LoginForm.module.css"
import refreshPhoto from "../../assets/images/refresh.png";

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
                <Field component={Input} name={"rememberMe"} type="checkbox"/>
                remember me
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
            {
                props.captchaUrl &&
                <div className={styles.captchaWrapper}>
                    <div>
                        <div className={styles.captchaImage} onClick={props.refreshCaptcha}>
                            <img src={props.captchaUrl} alt="captcha-image"/>
                            <img src={refreshPhoto}/>
                        </div>
                    </div>
                    <div>
                        <Field
                            component={Input}
                            name="captcha"
                            placeholder="captcha"
                            validate={[requiredField]}
                        />
                    </div>
                </div>
            }
        </form>
    );
};

export default reduxForm({
    form: "login",
})(LoginForm);
