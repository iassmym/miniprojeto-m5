// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} - Meu Portfólio | Desenvolvido com 💜</p>
    </footer>
  );
}
