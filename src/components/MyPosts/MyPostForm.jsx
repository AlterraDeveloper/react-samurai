import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLength, requiredField } from "../../utils/validators/validators";
import { Textarea } from "../FormsControls/Textarea/Textarea";

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field
          component={Textarea}
          name="newPostText"
          placeholder="your awesome post..."
          validate={[requiredField, maxLength(5)]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "myPostForm",
})(MyPostForm);