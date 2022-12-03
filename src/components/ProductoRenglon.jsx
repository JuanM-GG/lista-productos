// Importar modulos
import styled from 'styled-components';

// Estilos del componente ///////////////////////////////////

// Estilos para el componente completo
const ProductoRenglonEstilo = styled.div`
	align-items: center;
	/* justify-content: space-between; */
	background-color: lightblue;
	border: 4px solid red;

	padding: 1rem;
	border-radius: 1rem;
	margin-top: 1rem;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-areas: 'ID NOMBRE ALMACEN CARGADO';
`;

const DivEstilo = styled.div`
	width: 100%;
	span {
		font-weight: bold;
		display: flex;
		justify-content: center;
	}
`;

// Estilo del Id
const IdEstilo = styled(DivEstilo)`
	border: 4px solid red;
`;

// Estilo para el nombre
const NombreEstilo = styled(DivEstilo)`
	border: 4px solid red;
`;

const AlmacenEstilo = styled(DivEstilo)`
	border: 4px solid red;
`;

const CargadoEstilo = styled(DivEstilo)`
	border: 4px solid red;
`;

// Componente ////////////////////////////////////////////////////
const ProductoRenglon = ({ ID, NOMBRE, CANTIDAD }) => {
	// ESTO SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE

	// Parte 2. HTML que se renderiza en UserListRows
	return (
		// Estilo del componente
		<ProductoRenglonEstilo>
			<IdEstilo>
				<span>{Math.floor(ID / 1e31)}</span>
			</IdEstilo>
			<NombreEstilo>
				<span>{NOMBRE}</span>
			</NombreEstilo>
			<AlmacenEstilo>
				<span>{CANTIDAD}</span>
			</AlmacenEstilo>
			<CargadoEstilo>
				<span>{Math.floor(CANTIDAD / 24)}</span>
			</CargadoEstilo>
		</ProductoRenglonEstilo>
	);
};

export default ProductoRenglon;
