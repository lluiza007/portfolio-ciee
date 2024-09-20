import React from "react";
import '../Styles/NonoEnc.css';
import Segurança from '../img/segurança.png';

const NonoEnc = () => {
    return (
        <div className="nono">
            <h1 style={{textAlign:'center', fontSize:'40px'}}>Internet e Segurança Digital - 19/09/2024</h1>
            <h3 style={{textAlign:'center'}}>O 9<sup>o</sup> encontro mostrou as práticas de segurança digital</h3>
            <br></br>
            <p style={{textAlign:'center'}}>A segurança digital é o conjunto de práticas e tecnologias voltadas à proteção de dados e sistemas contra ameaças online, como hackers, vírus e fraudes. Ela envolve o uso de senhas fortes, criptografia, autenticação de múltiplos fatores e medidas de prevenção para evitar invasões e vazamentos de informações pessoais e corporativas. Com o aumento da digitalização, garantir a segurança online se tornou essencial para proteger a privacidade e integridade de usuários e organizações.</p>

            <img src={Segurança} alt="seg" style={{width:'300px'}} />

            <div style={{marginLeft:'30px'}}>
                <h2>Práticas de segurança digital:</h2>
                <ul>
                    <li>Utilizar antivírus;</li>
                    <li>Evitar clicar em anúncios e links duvidosos ou desconheçidos;</li>
                    <li>Optar por senhas complicadas, e altera-las a cada três meses;</li>
                    <li>Evitar redes de Wi-Fi públicas sem proteção</li>
                </ul>
            </div>
        </div>
    )
}

export default NonoEnc;