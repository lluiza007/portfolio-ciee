import React from "react";
import '../Styles/SegundoEnc.css';
import Cdt from'../img/cdt.png';

const SegundoEnc = () => {
    return (
        <div className="segundo">
            
            <br></br>
            <h1>Direitos e Deveres do Empregado e Empregador</h1>
            <br></br>
            <p>Os direitos e deveres do trabalhador e do empregador são regulados pela Consolidação das Leis do Trabalho (CLT) no Brasil. Ambos têm responsabilidades mútuas que visam garantir um ambiente de trabalho justo e produtivo.</p>

            <div className="div">
            <div className="empregado">
                <h2>Direitos e deveres do empregado:</h2>
               
                <ul className="ul">
                    <li>Cumprir diretrizes;</li>
                    <br></br>
                    <li>Ser ético;</li>
                    <br></br>
                    <li>Ser pontual;</li>
                    <br></br>
                    <li>Ser responsável;</li>
                    <br></br>
                    <li>Receber fgts;</li>
                    <br></br>
                    <li>Descanso durante o expediente;</li>   
                    <br></br>   
                    <li>Férias;</li>
                    <br></br>
                    <li>Remuneração;</li>
                </ul>
               
               
            </div>
            <div className="carteira">
                <img src={Cdt} alt="cdt" className="cdt" />
                </div>
            <div className="empregador">
            <h2>Direitos e deveres do empregador:</h2>
           
            <ul className="lu">
                <li>Exigir lealdade pra com o empregado;</li>
                <br></br>
                <li>Tem poder de organizar e comandar;</li>   
                <br></br>          
                <li>Tem que remunerar seu empregado;</li>
                <br></br>
                <li>Dar condições de trabalho digna para seus empregados;</li>
            </ul>
            </div>
            </div>
           
            
        </div>
       
        
    )
}

export default SegundoEnc;