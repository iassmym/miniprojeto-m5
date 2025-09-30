import React from 'react';
import Menu from './components/Menu/Menu.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import ProjetosCarrossel from './components/ProjetosCarrossel.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import Contato from './components/Contato/Contato.jsx';
import './App.css';

const projetos = [
  {
    titulo: 'Landing Page Portfolio',
    imagem: '/foto.png',
    descricao: 'Landing page criada em React como portfólio pessoal.',
  },
  {
    titulo: 'Projeto To-Do List',
    imagem: '/mocanegra.webp',
    descricao: 'Lista de tarefas criada com React e useState.',
  },
  {
    titulo: 'Projeto Módulo',
    imagem: '/projeto_modulo.png',
    descricao: 'Exemplo de projeto usando React, HTML e CSS.',
  },
];

export default function App() {
  return (
    <>
      <Menu />
      <Hero />

      <section id="projetos">
        <h1>Meus Projetos</h1>
        <ProjetosCarrossel projetos={projetos} />
      </section>

      {/* ✅ NOVA SEÇÃO: Quem Sou Eu */}
      <Sobre />

      {/* ✅ NOVA SEÇÃO: Contato + Currículo */}
      <Contato />

      <Footer />
    </>
  );
}

