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
import QuartoEnc from './Components/QuartoEnc';
import QuintoEnc from './Components/QuintoEnc';
import SextoEnc from './Components/SextoEnc';
import SetimoEnc from './Components/SetimoEnc';
import OitavoEnc from './Components/OitavoEnc';
import NonoEnc from './Components/NonoEnc';
import DecimoEnc from './Components/DecimoEnc';


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
      <QuartoEnc />
      <QuintoEnc />
      <SextoEnc />
      <SetimoEnc />
      <OitavoEnc />
      <NonoEnc />
      <DecimoEnc/>
      <Conclusão />
    </div>  
  );
}

export default App;
