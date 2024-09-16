import React from "react";
import Ciee from '../img/ciee.png';
import Sicoob from '../img/sicoob.png';
import "../Styles/Capa.css";



const Capa = () => {
    return (
        <div className="caixa">

            <h1 className="nome">Luiza Oyara</h1>

            <h2 className="portifolio">Portifólio</h2>

            <b>
            <nav>
                <ul className="nav">
                    <li>Empresa - Sicoob</li>
                    <li>Programa - CIEE Florianópolis</li>
                    <li>Supervisor - Gelson</li>
                </ul>
            </nav>
            </b>
            
            <h2 className="h2">Breve relato sobre os 10 dias iniciais</h2>

            <img src={Ciee} alt="ciee" style={{width: '200px', position: 'absolute', top: '300px', right: '85%' }}/>

            <img src={Sicoob} alt="sicoob" style={{width: '220px', position: 'absolute', top:'310px', right: '70%', }}/>



        </div>
    )
}
export default Capa;