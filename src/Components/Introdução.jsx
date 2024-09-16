import React from "react";
import Portifolio from '../img/portifolio.png'
import "./Introdução.css"

const Introdução = () => {
    return (
        <div className="container">

            <div className="nome">
            <h1>O Que É O Portifólio CIEE?</h1>
            <b>
            <p className="p">Esse portifólio, em específico, é uma atividade que reúne os principais registros dos encontros online do Programa CIEE, a fim de mostrar para as empresas o que nos foi ensinado.</p></b>
            </div>
           
          

            <div className="div">
                <h1 className="h1">Quem Sou Eu?</h1>
                <p>Olá, me chamo Luiza Oyara Garcia Abreu, tenho 17 anos e estou atualmente cursando o último ano do ensino médio.</p>
            <img src={Portifolio} alt="portifolio" className="img"/>
            </div>
            
        </div>
    )
}

export default Introdução;