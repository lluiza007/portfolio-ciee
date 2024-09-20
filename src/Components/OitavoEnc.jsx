import React from "react";
import '../Styles/Oitavo.css';
import Computador from '../img/computador.jpg';
const OitavoEnc = () => {
    return (
        <div className="oitavo">
            <h1 style={{textAlign:'center', fontFamily:'40px'}}>Noções Básicas do Computador</h1>
            <h3 style={{textAlign:'center'}}>No 8<sup>o</sup> encontro, falamos sobre computaçaõ, algumas noções básicas, etc.</h3>
            <br></br>

            <div style={{width:'50%', float:'right',}}>
                <img src={Computador} alt="com" style={{width:'250px'}} />
            </div>
            <div style={{width:'50%', marginTop:'50px'}}>
                <h2>Qual o significado de tecnologia?</h2>
                <br></br>
                <p style={{textAlign:'left', marginLeft:'20px'}}>A tecnologia pode ser definida como o conjunto de conhecimentos, técnicas, métodos e processos utilizados para criar ferramentas, máquinas, dispositivos e sistemas que resolvem problemas e facilitam a vida humana. Ela envolve a aplicação prática da ciência para o desenvolvimento de soluções que melhoram o dia a dia, desde as mais simples, como o uso de ferramentas manuais, até as mais complexas, como computadores, inteligência artificial e redes de comunicação.</p>
                <br></br>

                <h3 >A tecnologia ajuda as empresas em diversos setores:</h3>
                <br></br>
                <ul style={{textAlign:'left', marginLeft:'100px'}}>
                    <li>Recursos humanos: coleta e seleção de documentos;</li>
                    <li>Produção: mensura os resultados de desempenho por equipe e individualmente</li>
                </ul>
            </div>
           
        </div>
    )
}

export default OitavoEnc;