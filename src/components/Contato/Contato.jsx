import React from "react";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section className={styles.contato}>
      <h2>Contato</h2>

      <div className={styles.cards}>
        <a href="mailto:iasmympatricia7@gmail.com" className={styles.card}>
          ✉️ <span>Email: iasmympatricia7@gmail.com</span>
        </a>

        <a href="https://wa.me/5531982013646" target="_blank" rel="noopener noreferrer" className={styles.card}>
          📞 <span>WhatsApp: 31 98201-3646</span>
        </a>

        <a href="/curriculo.pdf" download className={styles.card}>
          📄 <span>Baixar Currículo</span>
        </a>
      </div>
    </section>
  );
}

