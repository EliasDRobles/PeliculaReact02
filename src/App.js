import Row from 'react-bootstrap/Row';
import Pelicula from './components/peliculas';
import peliculas from './json/peliculas.json';
import HeaderLogo from './components/header';
import Presentacion from './components/presentacion';
import PiePagina from './components/footer';

function App() {
  return (

    <>
      <HeaderLogo />
      <Presentacion />

      <div class="container-fluid">

        <Row>
          {peliculas.map(peli =>
            <Pelicula
              img={peli.img}
              titulo={peli.titulo}
              sinopsis={peli.sinopsis}
              opcion1={peli.opcion1}
              opcion2={peli.opcion2}
            />
          )}
        </Row>
      </div>

      <PiePagina />
    </>

  );
}

export default App;