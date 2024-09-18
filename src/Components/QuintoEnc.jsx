import React from "react";
import '../Styles/QuintoEnc.css';
import Rip from '../img/rip.png';

const QuintoEnc = () => {
    return (
        <div className="quinto">
            <br></br>
        <h1>Relações Interpessoais</h1>
        <h3>O 5<sup>o</sup> encontro nos fala sobre a importância das relações e vínculos pessoais.</h3>

        <img src={Rip} alt="rip" className="rip" />
        </div>
    )
}

export default QuintoEnc;