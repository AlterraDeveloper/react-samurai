import React from "react";
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name="newMessageText" placeholder="write a message..." />
      </div>
      <div>
      <button>Send message</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "message",
})(MessageForm);
