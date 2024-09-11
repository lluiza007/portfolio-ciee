import React from "react";
import styled from "styled-components";

;

const Capa = () => {
    return (
        <div style={{backgroundColor: 'white', color: 'black', textAlign: 'center', border: '2px solid black', padding: '20px', borderRadius: '10px', height: '50vh'}}>
            <h1 style={{fontSize: '40px', fontFamily: 'initial'}}>Luiza Oyara</h1>
            <h2 style={{fontFamily:'cursive', fontSize: '30px',}}>Portifólio</h2>
            <nav>
                <ul style={{textAlign: 'justify'}}>
                    <li>Empresa - Sicoob</li>
                    <li>Programa - CIEE Florianópolis</li>
                    <li>Supervisor -</li>
                </ul>
            </nav>
            <h2>Breve relato sobre os 10 dias iniciais</h2>
        </div>
    )
}
export default Capa;