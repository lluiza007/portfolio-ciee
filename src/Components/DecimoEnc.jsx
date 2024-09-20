import React from "react";
import '../Styles/DecimoEnc.css';
import Pacote from '../img/pacote.png';

const DecimoEnc = () => {
    return (
        <div className="decimo">
            <h1 style={{textAlign:'center', fontSize:'40px'}}>Pacote Office - 20/09/2024</h1>
            <h3 style={{textAlign:'center'}}>No 10<sup>o</sup> encontro fomos apresentados ao pacote office</h3>
            <br></br>
            <p style={{textAlign:'center'}}>Sua importância reside na capacidade de melhorar a produtividade e a eficiência em diversas tarefas. No setor corporativo, ele é fundamental para a elaboração de relatórios, controle de finanças, criação de propostas e organização de dados. Na educação, o Office auxilia na criação de materiais didáticos, como trabalhos acadêmicos e apresentações, além de facilitar a comunicação entre professores e alunos.
            Além disso, o Pacote Office é amplamente compatível com diversos dispositivos e sistemas operacionais, permitindo que os usuários colaborem de maneira integrada e em tempo real. A familiaridade e o uso universal dessas ferramentas tornam o Office uma competência essencial no mercado de trabalho, independentemente da área de atuação.</p>
            <br></br>
            <div style={{width:'50%', marginLeft:'40px', fontSize:'20px'}}>
                <h3>Ele possui várias aplicações voltadas para a produtividade</h3>
                <ul>
                    <li>Word: editor de texto</li>
                    <li>Excel: organizador de dados</li>
                    <li>Power Point: apresentação</li>
                </ul>
                <br></br>
                <img src={Pacote} alt="pac" style={{width:'200px'}}/>
            </div>

            <div style={{width:'50%', float:'right', textAlign:'left'}}>
                <h3>Qual sua importância dentro do mercado de trabalho?</h3>
                <br></br>
                <p>Saber usar o Pacote Office é essencial no mercado de trabalho porque suas ferramentas são amplamente utilizadas em quase todos os setores e empresas. O domínio de programas como Word, Excel e PowerPoint traz uma série de vantagens que aumentam a eficiência e produtividade no ambiente profissional. Aqui estão algumas razões pelas quais isso é tão importante:
                    <br></br>
                    <ul>
                        <li>Versatilidade: O Pacote Office é utilizado em tarefas administrativas, financeiras, de comunicação e até técnicas. Desde a criação de relatórios e documentos no Word até o controle de dados e cálculos avançados no Excel, sua aplicabilidade é vasta.</li>
                    
                        <li>Produtividade e Organização: Com o Excel, por exemplo, é possível automatizar cálculos, criar gráficos e organizar grandes volumes de dados, economizando tempo e evitando erros manuais. O Outlook facilita a gestão de e-mails e compromissos, tornando a comunicação mais eficiente.</li>
                    
                        <li>Comunicação Profissional: O PowerPoint é uma ferramenta fundamental para criar apresentações claras e impactantes, essenciais em reuniões, palestras e treinamentos. Saber usá-lo bem é uma vantagem em situações onde é preciso transmitir informações de forma organizada e visualmente atraente.</li>
                    
                        <li>Exigência do Mercado: Em muitas vagas de emprego, o conhecimento no Pacote Office é um requisito básico. Empregadores esperam que os candidatos saibam utilizar essas ferramentas de forma fluida para executar suas funções com competência.</li>
                    
                        <li>Colaboração e Compartilhamento: As versões mais recentes do Office permitem colaboração em tempo real, o que facilita o trabalho em equipe, especialmente em ambientes corporativos, onde a troca rápida de informações é crucial.</li>
                    </ul>
                    </p>
            </div>
        </div>
        
    )
}

export default DecimoEnc;