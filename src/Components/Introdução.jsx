import React from "react";
import Portifolio from '../img/portifolio.png'

const Introdução = () => {
    return (
        <div style={{ color: 'white', textAlign: 'center', border: '2px solid black', padding: '0', borderRadius: '10px', margin:'5px 0', height: '550px', display:'flex'}}>

            <div style={{backgroundColor: '#00665C', width:'50%', border: '2px solid black', borderRadius: '10px'}}>
            <h1>O Que É O Portifólio CIEE?</h1>
            <b>
            <p style={{fontSize:'25px', color:'black'}}>Esse portifólio, em específico, é uma atividade que reúne os principais registros dos encontros online do Programa CIEE, a fim de mostrar para as empresas o que nos foi ensinado.</p></b>
            </div>
           
          

            <div style={{backgroundColor: '#01B09F', width:'50%', border: '2px solid black', borderRadius: '10px' }}>
                <h1 style={{color:'white', right:'40%', width:'400px'}}>Quem Sou Eu?</h1>
                <p>Olá, me chamo Luiza Oyara Garcia Abreu, tenho 17 anos e estou atualmente cursando o último ano do ensino médio.</p>
            <img src={Portifolio} alt="portifolio" style={{width: '300px', position:'absolute', right:'0%', height:'550px', top:'645px', borderRadius:'5px',margin:'2px 2px'}}/>
            </div>
            
        </div>
    )
}

export default Introdução;