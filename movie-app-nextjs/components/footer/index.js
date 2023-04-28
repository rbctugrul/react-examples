import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.color}>
      Made with by
      <Link href="https://twitter.com/rbctugrul" target="_blank">TUGRUL ARABACI</Link>
    </footer>
  );
}

export default Footer;
