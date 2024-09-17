import React from "react";
import '../Styles/PrimeiroEnc.css';
import Eca from '../img/Eca.png';

const PrimeiroEnc = () => {
    return (
        <div className="primeiro">
            <br></br>

            <h2>Leis Da Aprendizagem - 09/09/2024</h2>
            <br></br>

            <p>No 1<sup>0</sup> encontro, fomos apresentados em uma videoconferência a tutoriais com a professora Thaís e depois as Leis de Aprendizagem. </p>
            <br></br>
            
            <h3>Lei da Aprendizagem</h3>
            <br></br>
            <p>É uma lei no Brasil que determina que empresas de médio e grande porte contratemjovens entre 14 e 24 anos como aprendizes. Nessa lei é falado sobre o que e como os jovens devem trabalhar, sempre conciliando os estudos com o trabalho, com a carga horária dividida entre atividades práticas na empresa e teorícas nas instituições de ensino. Aprendemos também sobre o ECA (instituto da criança e do adolescente), e como ele foi importante para a regulamentação do que conhecemos hoje como jovem aprendiz.</p>

            <img src={Eca} alt="eca" className="eca" />
        </div>
        
    )
}

export default PrimeiroEnc;