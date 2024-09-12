import React from "react";
import Portifolio from '../img/portifolio.png'

const Introdução = () => {
    return (
        <div style={{ color: 'white', textAlign: 'center', border: '2px solid black', padding: '0', borderRadius: '10px', margin:'5px 0', height: '550px', display:'flex'}}>

            <div style={{backgroundColor: 'rgb(6, 82, 82)', width:'50%', border: '2px solid black', borderRadius: '10px'}}>
            <h1>O Que É Um Portifólio?</h1>
            <p style={{fontSize:'30px', width:'400px',  top:'650px', right:'10%'}}>Esse portifólio, em específico, é uma atividade que reúne os principais registros dos encontros online do Programa CIEE, a fim de mostrar para as empresas o que nos foi ensinado.</p>
            </div>

            <div>
                <h1 style={{color:'white'}}>oi</h1>
            <img src={Portifolio} alt="portifolio" style={{width: '300px', position:'absolute', right:'10%', height:'550px', top:'645px', borderRadius:'5px'}}/>
            </div>
            
        </div>
    )
}

export default Introdução;