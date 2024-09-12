import React from "react";
import Portifolio from '../img/portifolio.png'

const Introdução = () => {
    return (
        <div style={{backgroundColor: 'rgb(6, 82, 82)', color: 'black', textAlign: 'center', border: '2px solid black', padding: '0', borderRadius: '10px', margin:'5px 0', height: '550px'}}>

            <h1>O Que É Um Portifólio?</h1>
            <p style={{fontSize:'30px', width:'400px', position:'absolute', top:'650px', right:'10%'}}>Esse portifólio, em específico, é uma atividade que reúne os principais registros dos encontros online do Programa CIEE, a fim de mostrar para as empresas o que nos foi ensinado.</p>

            <img src={Portifolio} alt="portifolio" style={{width: '300px', position:'absolute', right:'81%', height:'550px', top:'645px', borderRadius:'5px'}}/>
            
        </div>
    )
}

export default Introdução;