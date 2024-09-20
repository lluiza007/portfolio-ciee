import React from "react";
import "../Styles/Introdução.css";
import Portifolio from '../img/portifolio.png';

const Introducao = () => {
    return (
        <div className="container">
            <div className="name">
                <h1>O Que É O Portfólio CIEE?</h1>
                <p className="p">Esse portfólio, em específico, é uma atividade que reúne os principais registros dos encontros online do Programa CIEE, a fim de mostrar para as empresas o que nos foi ensinado.</p>
            </div>

            <div className="dov">
                <h1 className="h1">Quem Sou Eu?</h1>
                <p>Olá, meu nome é Luiza Oyara, tenho 17 anos e estou no último ano do ensino médio. Ao longo da minha trajetória escolar, sempre me interessei por matérias ligadas à tecnologia e ciências humanas. Esse interesse me levou a decidir seguir a carreira de Engenharia de Software, uma área que considero fascinante por unir lógica, criatividade e inovação para resolver problemas do mundo real.
                Durante o ensino médio, participei de projetos de tecnologia, como a ELITI, o que me ajudou a desenvolver habilidades em programação e a compreender a importância da automação e do desenvolvimento de softwares na sociedade atual. Também explorei o uso de ferramentas como GitHub, npm e React, o que só reforçou minha decisão de entrar para o mundo da programação profissionalmente.
                Além da escola, gosto de me dedicar a aprender de forma autônoma, seja assistindo vídeos ou fazendo cursos online sobre linguagens de programação e desenvolvimento de sistemas. Meu objetivo ao ingressar na faculdade de Engenharia de Software é me aprofundar nesses conhecimentos e me especializar em áreas como desenvolvimento web, inteligência artificial e segurança digital.</p>
                 
                <img className="image" src={Portifolio} alt="portifolio"></img>
                </div>

        </div>
    )
}

export default Introducao;
