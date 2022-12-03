// Importar modulos
import styled from 'styled-components';
import { useState } from 'react';

// Importar componentes
import FiltroListaProductos from './FiltroListaProductos';
import ListaProductosRenglones from './ListaProductosRenglones';
import Encabezado from './Encabezado';
import BarraNavegacion from './BarraNavegacion';

// Estilos //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Estilo para el componente completo
const ListaProductosEstilo = styled.div`
	width: 800px;
	margin: auto;
	padding: 1rem;
	background-color: yellow;
	border: 4px solid red;

	/* Estilo del layout */
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 100px 100px 500px;
	grid-template-areas:
		'Encabezado Encabezado'
		'Nav Nav'
		'Form Lista';
`;

// Estilos para el encabezado
const EncabezadoEstilo = styled.header`
	grid-area: Encabezado;
	display: grid;
	align-items: center;
	background-color: lightblue;
	border: 4px solid red;
	text-align: center;
`;

// Estilos para la barra de navegacion
const BarraNavegacionEstilo = styled.nav`
	grid-area: Nav;

	display: grid;
	align-items: center;
	background-color: lightgreen;
	border: 4px solid red;

	> ul {
		display: flex;
		/* Elimina los puntos */
		list-style: none;
	}

	li {
		padding: 10px;
		border: 4px solid red;
		margin: 0 40px 0 40px;
	}
`;

// Estilos para el formulario de filtrado
const FiltroListaProductosEstilo = styled.div`
	grid-area: Form;

	background-color: lightgray;
	border: 4px solid red;
	display: flex;
`;

// Estilos para los renglones de productos
const ListaProductosRenglonesEstilo = styled.section`
	grid-area: Lista;
	overflow: auto;
	background-color: lightpink;
	border: 4px solid red;
`;

// Componente ///////////////////////////////////////////////////////////////////////
const ListaProductos = ({ productosIniciales }) => {
	// Parte 1. Declarar todos los hooks a usar en el componente
	// Custom Hook para crear el estado filters y destructurar sus componentes y su handleFilters
	const { buscar, ordenarPor, manejarFiltros } = useFiltros();

	// ESTO SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE

	// Parte 2. Llamar funciones para modificar la lista de usuarios a partir de los datos del formulario
	// 1. Filtrar usuarios por nombre
	let productosFiltrados = filtrarProductosPorNombre(
		productosIniciales,
		buscar
	);

	// 3. Ordenar usuarios
	productosFiltrados = ordenarProductos(productosFiltrados, ordenarPor);

	// Parte 3. Crear el HTML que se va a renderizar en App
	return (
		// Un estilo para todo el componente
		<ListaProductosEstilo>
			{/* ENCABEZADO */}
			<EncabezadoEstilo>
				<Encabezado />
			</EncabezadoEstilo>
			{/* PANEL DE NEVAGACION */}
			<BarraNavegacionEstilo>
				<BarraNavegacion />
			</BarraNavegacionEstilo>
			{/* CONTENIDO PRINCIPAL */}
			{/* FILTRO DE USUARIOS */}
			<FiltroListaProductosEstilo>
				<FiltroListaProductos
					manejarFiltros={manejarFiltros}
					productosFiltrados={productosFiltrados}
				/>
			</FiltroListaProductosEstilo>
			{/* Usamos un ProductoContext para pasar la funcion toggleUsuarioActivo a ProductoEstado */}

			{/* LISTA DE USUARIOS */}
			<ListaProductosRenglonesEstilo>
				<ListaProductosRenglones productos={productosFiltrados} />
			</ListaProductosRenglonesEstilo>
		</ListaProductosEstilo>
	);
};
// Funciones /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Parte 4. Crear las funciones que generan los custom hooks
// Funcion para crear estado filtros y su API
const useFiltros = () => {
	const [filtros, setFiltros] = useState({
		buscar: '',
		ordenarPor: 0
	});
	const manejarFiltros = (buscar, ordenarPor) => {
		setFiltros({ buscar, ordenarPor });
	};

	return {
		...filtros,
		manejarFiltros
	};
};

// Funcion para crear estado users y su API

// Parte 5. Crear las funciones que manipulan los estados
// Funcion para filtrar usuarios por nombre
const filtrarProductosPorNombre = (productos, buscar) => {
	// Si no hay nombre para buscar, regresa todos los usuarios
	// Regresamos una copia para tener una funcion pura
	if (!buscar) return [...productos];
	// Pasa el nombre a buscar a minusculas
	const minusculaBusqueda = buscar.toLowerCase();
	console.log(minusculaBusqueda);
	// Filtra los usuarios con el nombre de busqueda
	const productosFiltrados = productos.filter(producto =>
		producto.NOMBRE.toLowerCase().startsWith(minusculaBusqueda)
	);

	return productosFiltrados;
};

// Función para ordenar los usuarios
const ordenarProductos = (productos, ordenarPor) => {
	const productosOrdenados = [...productos];
	switch (ordenarPor) {
		case 1:
			return productosOrdenados.sort((a, b) => {
				if (a.NOMBRE > b.NOMBRE) return 1;
				if (a.NOMBRE < b.NOMBRE) return -1;
				return 0;
			});
		default:
			return productosOrdenados;
	}
};

export default ListaProductos;
