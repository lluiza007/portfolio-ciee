import React from "react";
import Portifolio from '../img/portifolio.png'

const Introdução = () => {
    return (
        <div style={{ color: 'white', textAlign: 'center', border: '2px solid black', padding: '0', borderRadius: '10px', margin:'5px 0', height: '550px', display:'flex'}}>

            <div style={{backgroundColor: 'rgb(6, 82, 82)', width:'50%', border: '2px solid black', borderRadius: '10px'}}>
            <h1>O Que É Um Portifólio?</h1>
            <p style={{fontSize:'30px', width:'350px',  top:'650px', right:'15%'}}>Esse portifólio, em específico, é uma atividade que reúne os principais registros dos encontros online do Programa CIEE, a fim de mostrar para as empresas o que nos foi ensinado.</p>
            </div>

            <div style={{backgroundColor: '#01B09F', width:'50%', border: '2px solid black', borderRadius: '10px' }}>
                <h1 style={{color:'white', right:'40%', width:'400px'}}>Quem Sou Eu?</h1>
                <p></p>
            <img src={Portifolio} alt="portifolio" style={{width: '300px', position:'absolute', right:'0%', height:'550px', top:'645px', borderRadius:'5px',margin:'2px 2px'}}/>
            </div>
            
        </div>
    )
}

export default Introdução;