import './App.css';
import ListaProductos from './components/ListaProductos';
import ProductosPorCategoria from './components/ProductosPorCategoria';
import TopBar from './components/TopBar';
import TotalProductos from './components/TotalProductos';
import TotalUsuarios from './components/TotalUsuarios';
import UltimoUsuario from './components/UltimoUsuario';

function App() {
  return (
    <div style = {{backgroundColor: '#ebebeb'}}>
      <header>
        <TopBar />
      </header>

      <div className="container">
        <div className="card-body row justify-content-center col-md-6 custom-card card-shadow">
          <TotalProductos />
        </div>

        <div className="card-body row justify-content-center col-md-6 custom-card card-shadow text-align-center">
          <TotalUsuarios />
        </div>

        <div className="card-body row justify-content-center col-md-6 custom-card card-shadow text-align-center">
          <ProductosPorCategoria />
        </div>

        <div className="card-body row justify-content-center col-md-6 custom-card card-shadow text-align-center">
          <UltimoUsuario />
        </div>

        <div className="card-body row justify-content-center col-md-6 custom-card card-shadow text-align-center">
          <ListaProductos />
        </div>
      </div>
    </div>
  );
}

export default App;
