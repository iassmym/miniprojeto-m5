// src/components/Hero/Hero.jsx
import React, { useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Seja bem-vindo!</p>
        <h1 className={styles.title}>Meu Portfólio</h1>
        <p className={styles.role}>Desenvolvedor Front-End</p>
        <p className={styles.description}>
          Transformando ideias em interfaces bonitas e funcionais.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={() => setModalOpen(true)}>
            Contato
          </button>
          <a href="#projetos" className={styles.secondaryBtn}>
            Ver Projetos
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/perfil.jpeg"
          alt="Perfil"
          className={styles.image}
        />
      </div>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <p>Entre em contato comigo!</p>
            <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
