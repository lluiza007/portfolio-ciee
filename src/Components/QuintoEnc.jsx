import React from "react";
import '../Styles/QuintoEnc.css';
import Rip from '../img/rip.png';

const QuintoEnc = () => {
    return (
        <div className="quinto">
            <br></br>
        <h1>Relações Interpessoais - 13/09/2024</h1>
        <h3>O 5<sup>o</sup> encontro nos fala sobre a importância das relações e vínculos pessoais.</h3>
        <br></br>
        <p>As relações interpessoais são fundamentais para o desenvolvimento pessoal e social de cada indivíduo. Elas envolvem a interação entre pessoas, sejam familiares, amigos, colegas de trabalho ou até desconhecidos, e se baseiam em comunicação, empatia e respeito mútuo. </p>

        <img src={Rip} alt="rip" className="rip" style={{display:'block', marginTop:'10px', marginLeft:'500px'}}/>
        
        <div style={{textAlign:'left', marginLeft:'30px', marginTop:'0'}}>
            <h2>Cenários de Relações Interpessoais:</h2>
            <br></br>
            <ul>
                <li>Indivíduos que trabalham na mesma empresa no mesmo setor ou em setores diferentes;</li>
                <br></br>
                <li>Pessoas que estudam juntas</li>
                <br></br>
                <li></li>
            </ul>
        </div>
        <div style={{textAlign:'right', marginRight: '30px'}}>
            <h2>Pontos Positivos em ter Boas Relações Interpessoais:</h2>
            <br></br>
            <ul style={{textAlign:'left', marginLeft:'800px'}}>
                <li>Aumento da produtividade;</li>
                <br></br>
                <li>Melhoria na comunicação;</li>
                <br></br>
                <li>Maior satisfação nas relações;</li>
                <br></br>
                <li>Confiança nos feedbacks;</li>
            </ul>
        </div>
        </div>
        
    )
}

export default QuintoEnc;