import React from "react";
import { Field, reduxForm } from "redux-form";

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field
          component={"textarea"}
          name="newPostText"
          placeholder="your awesome post..."
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