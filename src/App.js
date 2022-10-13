
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="container">
      <Header Galeria={'Galeria de Imagenes con React'}></Header>
      <Cards></Cards>
      <Footer 
      pildora={'+ Información'}
      footer={'Todos los Derechos Reservados'}>
      </Footer>
          </div>
  );
}

export default App;

