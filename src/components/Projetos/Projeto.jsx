import React from 'react';
import styles from './Projetos.module.css';

const Projeto = ({ titulo, imagem, descricao }) => {
    return (
        <div className={styles.projeto}>
            <h2 className={styles.titulo}>{titulo}</h2>
            <img src={imagem} alt={titulo} className={styles.imagem} />
            <p className={styles.descricao}>{descricao}</p>
        </div>
    );
};

export default Projeto;