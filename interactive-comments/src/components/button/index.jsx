import React from "react";
import { clsx } from "clsx";

import styles from "./styles.module.scss";

function Button({ children, variant = "ghost", className, ...props }) {
  return (
    <button
      {...props}
      className={clsx(styles.button, className, styles[variant])}
    >
      {children}
    </button>
  );
}

export { Button };
