import React from "react";
import Ciee from '../img/ciee.png';
import Sicoob from '../img/sicoob.png';



const Capa = () => {
    return (
        <div style={{backgroundColor: 'white', color: 'black', textAlign: 'center', border: '2px solid black', padding: '20px', borderRadius: '10px', height: '80vh'}}>

            <h1 style={{ fontSize: '45px', fontFamily: 'initial', width:'300px', position:'absolute', top:'170px', right:'40%'}}>Luiza Oyara</h1>

            <h2 style={{fontFamily:'cursive', fontSize: '40px', width: '200px', position: 'absolute', top: '250px', right: '43%' }}>Portifólio</h2>

            <b>
            <nav>
                <ul style={{textAlign: 'justify', marginTop: '10%', top: '175px', position:"absolute" }}>
                    <li>Empresa - Sicoob</li>
                    <li>Programa - CIEE Florianópolis</li>
                    <li>Supervisor - Gelson</li>
                </ul>
            </nav>
            </b>
            
            <h2 style={{fontSize:'35px', width: '350px', position: 'absolute', top:'380px', right: '38%'}}>Breve relato sobre os 10 dias iniciais</h2>

            <img src={Ciee} alt="ciee" style={{width: '200px', position: 'absolute', top: '500px', right: '85%' }}/>

            <img src={Sicoob} alt="sicoob" style={{width: '220px', position: 'absolute', top:'515px', right: '70%', }}/>

        </div>
    )
}
export default Capa;