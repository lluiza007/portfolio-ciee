import logo from './logo.svg';
import './App.css';
import Capa from './Components/Capa';
import Introdução from './Components/Introdução';
import Sumario from './Components/Sumario';
import PrimeiroEnc from './Components/PrimeiroEnc';
import Apresentação from './Components/Apresentação';
import Conclusão from './Components/Conclusão';

function App() {
  return (
    <div>
      <Capa />
      <Introdução/>
      <Sumario />
      <Apresentação />
      <PrimeiroEnc />
      <Conclusão />
    </div>  
  );
}

export default App;
