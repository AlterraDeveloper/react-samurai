import React from "react";
import styles from "./FormControl.module.css";

export const FormControl = ({ input, meta, children, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError && styles.error)}>
      <div>
        {children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
