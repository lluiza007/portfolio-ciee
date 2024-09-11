import React from "react";
import Ciee from '../img/ciee.png';
import Sicoob from '../img/sicoob.png';



const Capa = () => {
    return (
        <div style={{backgroundColor: 'white', color: 'black', textAlign: 'center', border: '2px solid black', padding: '20px', borderRadius: '10px', height: '80vh'}}>

            <h1 style={{fontSize: '45px', fontFamily: 'initial', width:'200px', position:'absolute', top:'145px', right:'43%'}}>Luiza Oyara</h1>

            <h2 style={{fontFamily:'cursive', fontSize: '40px', width: '200px', position: 'absolute', top: '250px', right: '43%' }}>Portifólio</h2>

            <nav>
                <ul style={{textAlign: 'justify', marginTop: '10%', }}>
                    <li>Empresa - Sicoob</li>
                    <li>Programa - CIEE Florianópolis</li>
                    <li>Supervisor - Gelson</li>
                </ul>
            </nav>
            
            <h2 style={{width: '300px', position: 'absolute', top:'400px', right: '40%'}}>Breve relato sobre os 10 dias iniciais</h2>

            <img src={Ciee} alt="ciee" style={{width: '200px', position: 'absolute', top: '500px', right: '80%' }}/>

            <img src={Sicoob} alt="sicoob" style={{width: '220px', position: 'absolute', top:'515px', right: '60%', }}/>

        </div>
    )
}
export default Capa;