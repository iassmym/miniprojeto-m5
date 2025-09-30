import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <h2 className={styles.titulo}>Quem Sou Eu</h2>
      <p className={styles.texto}>
        Sou <strong>Iasmym Patrícia</strong>, estudante de Desenvolvimento Web Full Stack pelo 
        <strong> Programadores do Amanhã</strong> e formada no Ensino Médio. Atualmente trabalho na 
        <strong> Mercearia Ribeiro Morais</strong>, onde desenvolvo habilidades de organização e atendimento.
      </p>
      <p className={styles.texto}>
        Tenho interesse nas áreas de <strong>contabilidade</strong> e <strong>tecnologia</strong>, e busco 
        constantemente aprender para construir minha carreira unindo responsabilidade, empatia e evolução contínua.
      </p>
    </section>
  );
}
