import React from "react";
import styles from "./ProjetosCarrossel.module.css";

const projetos = [
  {
    titulo: "Mineprojeto M4",
    imagem: "/perfil.jpeg",
    descricao: "Um projeto em que aprendemos a usar o localhost",
    link: "https://github.com/iassmym/MINIPROJETOM4ultimaversao.git"
  },
  {
    titulo: "Projeto M2 - Quiz de Computação",
    imagem: "/perfil.jpeg",
    descricao: "Um quiz divertido para testar conhecimentos de computação",
    link: "https://github.com/iassmym/projeto.M2.git"
  }
];

export default function ProjetosCarrossel() {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Meus Projetos</h2>

      <div className={styles.carrossel}>
        {projetos.map((proj, index) => (
          <a
            key={index}
            className={styles.card}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={proj.imagem} alt={proj.titulo} className={styles.imagem} />
            <h3>{proj.titulo}</h3>
            <p>{proj.descricao}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
