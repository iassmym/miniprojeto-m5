// src/components/Projetos.jsx
import React from 'react';
import Projeto from './Projeto';
import styles from './Projetos.module.css';

const listaProjetos = [
  {
    titulo: "Mineprojeto M4",
    imagem: "/WhatsApp Image 2024-12-17 at 22.49.33.jpeg",
    descricao: "Um projeto em que aprendemos a usar o localhost",
    link: "https://github.com/iassmym/MINIPROJETOM4ultimaversao.git"
  },
  {
    titulo: "Projeto M2 - Quiz de Computação",
    imagem: "/WhatsApp Image 2024-12-17 at 22.49.33.jpeg",
    descricao: "Um quiz divertido para testar conhecimentos de computação",
    link: "https://github.com/iassmym/projeto.M2.git"
  }
];

export default function Projetos() {
  return (
    <section className={styles.projetosContainer}>
      <h1 className={styles.tituloPrincipal}>Meus Projetos</h1>
      {listaProjetos.map((proj, index) => (
        <a href={proj.link} target="_blank" rel="noopener noreferrer" key={index}>
          <Projeto 
            titulo={proj.titulo} 
            imagem={proj.imagem} 
            descricao={proj.descricao} 
          />
        </a>
      ))}
    </section>
  );
}
