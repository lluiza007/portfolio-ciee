import logo from './logo.svg';
import './App.css';
import Capa from './Components/Capa';
import Introdução from './Components/Introdução';
import Sumario from './Components/Sumario';
import PrimeiroEnc from './Components/PrimeiroEnc';
import Conclusão from './Components/Conclusão';
import SegundoEnc from './Components/SegundoEnc';

function App() {
  return (
    <div>
      <Capa />
      <Introdução/>
      <Sumario />
      <PrimeiroEnc />
      <SegundoEnc />
      <Conclusão />
    </div>  
  );
}

export default App;
