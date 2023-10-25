import contadorDeClicsLogo from './imagenes/logotipo-contador-de-clics.jpeg';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics((prevNumClics) => prevNumClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='contador-logo-contenedor'>
        <img 
        className='contador-logo'
        src={contadorDeClicsLogo}
        alt='logo de calculadora' />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics} />
        <Boton
          texto='Clic' 
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
