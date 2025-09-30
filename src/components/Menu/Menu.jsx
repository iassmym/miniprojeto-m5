// src/components/Menu/Menu.jsx
import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home">Início</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}
