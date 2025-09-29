import Menu from "./components/Menu/Menu.jsx";
import Hero from "./components/Hero/Hero.jsx";
// import Projetos from './components/Projetos/Projetos.jsx'

// arquivo principal
export default function App(){
  return(
    <div>
      <Menu />
      <Hero />
      {/* <Projetos /> */}
    </div>
  )
}
import ProjetosCarrossel from './components/ProjetosCarrossel';
const projetos = [
    {
        titulo: 'Projeto 1',
        imagem: 'link-da-imagem1.jpg',
        descricao: 'Descrição do projeto 1',
    },
    {
        titulo: 'Projeto 2',
        imagem: 'link-da-imagem2.jpg',
        descricao: 'Descrição do projeto 2',
    },
    // Adicione mais projetos conforme necessário
];

const Appjsx = () => {
    return (
        <div>
            <h1>Meus Projetos</h1>
            <ProjetosCarrossel projetos={projetos} />
        </div>
    );
};