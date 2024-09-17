import logo from './logo.svg';
import './App.css';
import Capa from './Components/Capa';
import Introdução from './Components/Introdução';
import Sumario from './Components/Sumario';
import PrimeiroEnc from './Components/PrimeiroEnc';
import Conclusão from './Components/Conclusão';
import SegundoEnc from './Components/SegundoEnc';
import Header from './Components/Header';
import TerceiroEnc from './Components/TerceiroEnc';


function App() {
  return (
    <div>
      <Header />
      <Capa />
      <Sumario />
      <Introdução/>
      <PrimeiroEnc />
      <SegundoEnc />
      <TerceiroEnc />
      <Conclusão />
    </div>  
  );
}

export default App;
