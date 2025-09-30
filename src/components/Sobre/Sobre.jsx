import React from "react";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section className={styles.sobre}>
      <h2>Sobre Mim</h2>
      <p>
        Sou <strong>Iasmym Patrícia</strong>, formada no Ensino Médio e estudante de 
        Desenvolvimento Web Full Stack pelo Programadores do Amanhã.
        Trabalho atualmente como vendedora na Mercearia Ribeiro Morais,
        onde desenvolvo habilidades de atendimento e organização.
        Busco oportunidades para iniciar minha carreira em contabilidade e tecnologia,
        unindo responsabilidade e aprendizado constante.
      </p>
    </section>
  );
}
