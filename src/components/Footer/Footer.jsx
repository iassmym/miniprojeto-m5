// src/components/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 - Desenvolvido por Iasmym Costa</p>
      <a href="https://github.com/iassmym" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </footer>
  );
}
