// src/components/Projetos/Projeto.jsx
import React from 'react';
import styles from './Projeto.module.css'; // vamos criar o CSS já já

export default function Projeto({ titulo, imagem, descricao }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={titulo} className={styles.imagem} />
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>{descricao}</p>
    </div>
  );
}
