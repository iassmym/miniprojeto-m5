// src/App.jsx
import React from 'react';
import Menu from './components/Menu/Menu.jsx';
import Hero from './components/Hero/Hero.jsx';
import ProjetosCarrossel from './components/Projetos/ProjetosCarrossel.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import Contato from './components/Contato/Contato.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <Menu />

      <section id="home">
        <Hero />
      </section>

      <section id="projetos">
        <ProjetosCarrossel />
      </section>

      <section id="sobre">
        <Sobre />
      </section>

      <section id="contato">
        <Contato />
      </section>

      <Footer />
    </>
  );
}
