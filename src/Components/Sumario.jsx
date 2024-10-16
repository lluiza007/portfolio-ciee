import React from "react";
import '../Styles/Sumario.css';

const Sumario = () => {

    // Função para redirecionar o usuário ao clicar em um item
    const handleItemClick = (page) => {
        // Simulando navegação dentro da mesma página
        // Para navegação entre páginas, substitua o `window.location.hash` por `window.location.href`
        window.location.hash = page;
    };

    return (
        <div className="body"> 
            <h1>Sumário</h1>
            
            <nav className="list">
                <ul>
                    <li onClick={() => handleItemClick('#page2')}>01. O QUE É O PORTIFOLIO CIEE.................Pg.2</li>
                    <li onClick={() => handleItemClick('#page3')}>02. QUEM SOU EU............................................Pg.3</li>
                    <li onClick={() => handleItemClick('#page4')}>03. ENCONTRO 1 - Leis Da Aprendizagem......Pg.4</li>
                    <li onClick={() => handleItemClick('#page5')}>04. ENCONTRO 2-Direitos e Deveres do Empregado e Empregador.............................Pg.5</li>
                    <li onClick={() => handleItemClick('#page6')}>05. ENCONTRO 3- Conceitos e Tipos de Empresa...Pg.6</li>
                    <li onClick={() => handleItemClick('#page7')}>06. ENCONTRO 4- Ética Profissional........................Pg.7</li>
                    <li onClick={() => handleItemClick('#page8')}>07. ENCONTRO 5-Relações Interpessoais................Pg.8</li>
                    <li onClick={() => handleItemClick('#page9')}>08. ENCONTRO 6- Gestão do Tempo........................Pg.9</li>
                    <li onClick={() => handleItemClick('#page10')}>09. ENCONTRO 7- Saúde do Trabalhador...............Pg.10</li>
                    <li onClick={() => handleItemClick('#page11')}>10. ENCONTRO 8- Noção Básica do Computador.Pg.11</li>
                    <li onClick={() => handleItemClick('#page12')}>11. ENCONTRO 9- .Internet e Segurança Digital......Pg.12</li>
                    <li onClick={() => handleItemClick('#page13')}>12. ENCONTRO 10- Pacote office...................Pg.13</li>
                    <li onClick={() => handleItemClick('#conclusao')}>13. CONCLUSÃO..............................................Pg.14</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sumario;
