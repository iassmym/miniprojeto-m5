
// src/components/ProjetosCarrossel.jsx

import React from 'react';
import Slider from 'react-slick';
import Projeto from './Projetos/Projeto.jsx'; // Certifique-se de que o caminho está correto
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const ProjetosCarrossel = ({ projetos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {projetos.map((projeto, index) => (
        <Projeto
          key={index}
          titulo={projeto.titulo}
          imagem={projeto.imagem}
          descricao={projeto.descricao}
        />
      ))}
    </Slider>
  );
};

export default ProjetosCarrossel;
