import React from "react";
import '../Styles/SetimoEnc.css';

const SetimoEnc = () => {
    return (
        <div className="setimo">
            <h1 style={{textAlign:'center', fontSize:'40px'}}>Saúde do Trabalhador</h1>
            <h3 style={{textAlign:'center'}}>o 7<sup>o</sup> encontro nos mostrou sobre a saúde coletiva</h3>
            <br></br>
            <p style={{textAlign:'center'}}>A Saúde do Trabalhador é o conjunto de atividades do campo da saúde coletiva que se destina, por meio das ações de vigilância epidemiológica e vigilância sanitária, à promoção e proteção da saúde dos trabalhadores, assim como visa à recuperação e reabilitação da saúde dos trabalhadores submetidos aos riscos e agravos advindos das condições de trabalho.</p>
            <br></br>

            <div style={{marginLeft:'30px'}}>
                <h2>As 5 Principais Regras da NR 17:</h2>
                <ul>
                    <li>Ergonomia; </li>
                    <li> Jornada de Trabalho – Operadores de Telemarketing;</li>
                    <li>Transporte de cargas;</li>
                    <li>trabalhos manuais;</li>
                    <li>Organização do trabalho.</li>
                </ul>
            </div>
        </div>
    )
}

export default SetimoEnc;