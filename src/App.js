import logo from './logo.svg';
import './App.css';
import Capa from './Components/Capa';
import Introdução from './Components/Introdução';
import Sumario from './Components/Sumario';
import PrimeiroEnc from './Components/PrimeiroEnc';
import Apresentação from './Components/Apresentação';

function App() {
  return (
    <div>
      <Capa />
      <Introdução/>
      <Sumario />
      <Apresentação />
      <PrimeiroEnc />
    </div>  
  );
}

export default App;
