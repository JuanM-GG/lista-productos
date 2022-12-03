// Importar componentes
import styled from 'styled-components';
import ProductoRenglon from './ProductoRenglon';
// Estilos //////////////////////////////////////////////////
const NombreColumnasEstilo = styled.p`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

const IdEstilo = styled.span`
	margin-left: 40px;
`;

// Componente ///////////////////////////////////////////////////////////////
const ListaProductosRenglones = ({ productos }) => {
	// ESTO SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE

	// Parte 2. HTML que se renderiza en UsersList
	// Si no hay usuarios, regresa el parrafo no hay usuarios
	if (!productos.length) return <p>No hay productos</p>;
	// Si hay usuarios regresa los componentes UserRow por cada uno
	// No usamos return en map si todo se escribe en una linea
	return (
		<>
			<NombreColumnasEstilo>
				{/* Nombres de las columnas en la tabla de productos */}
				<IdEstilo>ID</IdEstilo>
				<span>NOMBRE</span>
				<span>ALMACEN</span> <span>CARGADO</span>
			</NombreColumnasEstilo>
			{productos.map(producto => (
				<ProductoRenglon key={producto.ID} {...producto} />
			))}
		</>
	);
};

export default ListaProductosRenglones;
