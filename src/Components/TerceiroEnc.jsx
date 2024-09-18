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
            <div style={{width:'50%', float:'left'}}>
                <h2 style={{marginLeft:'100px', marginTop: '250px'}}>Organograma Sicoob</h2>
                <br></br>
                <img src={Organograma} alt="org" className="org"/>

            </div>
            <div style={{width:'50%', }}>
            <div className="empresa" style={{display:'block', width:'100%', marginTop:'70px', textAlign:'left'}}>
                <h2>Perfis de uma empresa</h2>
                 <br></br>
                 <ul>
                <li>Perfil SUBJETIVO: A empresa é o empresário, pois empresário é quem exercita a atividade econômica organizada, de forma continuada.</li>
                <br></br>
                <li>Perfil FUNCIONAL:  A empresa é uma atividade, que realiza produção e circulação de bens e serviços, mediante organização de fatores de produção </li>
                <br></br>
                <li>Perfil PATRIMONIAL: A empresa é um conjunto de bens. </li>
                </ul>
            
            
            </div>

            </div>
        
           
        </div>
        
    )
}

export default TerceiroEnc;