import React from "react";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <h2>Contato</h2>

      <div className={styles.cards}>
        <a href="mailto:iasmympatricia7@gmail.com" className={styles.card}>
          ✉️ <span>Email: iasmympatricia7@gmail.com</span>
        </a>

        <a href="tel:31982013646" className={styles.card}>
          📞 <span>Telefone: 31 98201-3646</span>
        </a>

        <a href="/curriculo.pdf" download className={styles.card}>
          📄 <span>Baixar Currículo</span>
        </a>
      </div>

      <div className={styles.pdfContainer}>
        <iframe src="/curriculo.pdf" title="Currículo" className={styles.pdfViewer}></iframe>
      </div>
    </section>
  );
}
