import ListaProductos from './components/ListaProductos';
import { productos } from './productos.js';

const App = () => {
	return <ListaProductos productosIniciales={productos} />;
};

export default App;
