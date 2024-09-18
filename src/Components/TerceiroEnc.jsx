import React from "react";
import '../Styles/TerceiroEnc.css';
import Organograma from '../img/organograma.png';

const TerceiroEnc = () => {
    return (
        <div className="terceiro">
            <br></br>
            <h1 style={{fontSize: '40px', textAlign: 'center'}}>Conceitos e Tipos de Empresa</h1>
            <h3 style={{textAlign: 'center'}}>O 3<sup>o</sup> encontro ensinou sobre os perfis de empresa</h3>
            <h3 style={{textAlign: 'center'}}>-histórico, missão, visão, valores, hierarquia e organograma-</h3>
            <h2 style={{marginLeft:'100px', marginTop: '100px'}}>Organograma Sicoob</h2>
        
            <p></p>
            
            
           
            <img src={Organograma} alt="org" className="org"/>
            
        </div>
        
    )
}

export default TerceiroEnc;