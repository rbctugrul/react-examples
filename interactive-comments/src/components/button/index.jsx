import React from "react";
import { clsx } from "clsx";

import styles from "./styles.module.scss";

function Button({ variant = "ghost", children, ...props }) {
  return (
    <button className={clsx(styles.button, styles[variant])} {...props}>
      {children}
    </button>
  );
}

export { Button };
