import React from "react";
import '../Styles/TerceiroEnc.css';
import Organograma from '../img/organograma.png';

const TerceiroEnc = () => {
    return (
        <div className="terceiro">
            <br></br>
            <h1>Conceitos e Tipos de Empresa</h1>
            <h3>O 3 <sup>0</sup> encontro ensinou sobre os perfis de empresa</h3>
            
            <img src={Organograma} alt="org" className="org"/>
        </div>
        
    )
}

export default TerceiroEnc;