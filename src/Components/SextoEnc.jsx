import React from "react";
import '../Styles/SextoEnc.css';
import Gestao from '../img/gestao.png';

const SextoEnc = () => {
    return (
        <div className="sexto">
            <h1 style={{textAlign:'center', fontSize:'40px'}}>Gestão do tempo - 16/09/2024</h1>
            <h3 style={{textAlign:'center'}}>O 6<sup>o</sup> encontro nos ensinou sobre como manejar o tempo e toda a questão que o envolve</h3>
            <br></br>
            <p style={{textAlign:'center', margin:'10px'}}>Gestão do tempo é um conjunto de técnicas usado para aprimorar a realização de tarefas, de modo que a produtividade e a eficiência sejam mantidas. Então o gerenciamento do tempo consiste na adoção de uma série de processos e ferramentas que auxiliam o cumprimento de atividades e projetos, dentro dos prazos estabelecidos e com resultados satisfatórios. </p>
            <br></br>

            <div style={{width:'50%', float:'left', textAlign:'center', marginLeft:'20px'}}>
                <h2>Objetivo:</h2>
                <p>A gestão do tempo, dentro de uma empresa, visa a produtividade e eficiência dos colaboradores, fazendo com que os mesmos consigam entregar o que precisam sem ficar com diversas coisas acumuladas.</p>
                <br></br>

                <img src={Gestao} alt="gestao" style={{ marginTop: '0px', width: '400px', marginleft: '40px'}} />
            </div>
        </div>

    )
}

export default SextoEnc;