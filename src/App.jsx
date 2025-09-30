// src/App.jsx

import Menu from "./components/Menu/Menu.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProjetosCarrossel from "./components/ProjetosCarrossel.jsx";

const projetos = [
  {
    titulo: 'Projeto 1',
    imagem: '/projeto1.jpg', // coloque a imagem em /public
    descricao: 'Descrição do projeto 1',
  },
  {
    titulo: 'Projeto 2',
    imagem: '/projeto2.jpg', // coloque a imagem em /public
    descricao: 'Descrição do projeto 2',
  },
  // Adicione mais projetos se quiser
];

export default function App() {
  return (
    <div>
      <Menu />
      <Hero />
      <h1>Meus Projetos</h1>
      <ProjetosCarrossel projetos={projetos} />
      <Footer />
    </div>
  );
}
