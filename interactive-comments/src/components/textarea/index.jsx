import React from "react";
import styles from "./styles.module.scss";

function TextArea({ ...props }) {
  return <textarea className={styles.textArea} rows={4} {...props} />;
}

export { TextArea };
