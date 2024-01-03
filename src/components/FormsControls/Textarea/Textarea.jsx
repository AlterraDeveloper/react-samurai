import React from "react";
import { FormControl } from "../FormControl/FormControl";

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};