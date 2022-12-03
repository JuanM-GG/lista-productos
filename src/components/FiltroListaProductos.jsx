// Importar modulos
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import styled from 'styled-components';

// Estilos para el componente ////////////////////////////////////////////////////////////////

// Estilo para el componente completo
const FiltroListaProductosEstilo = styled.form`
	width: 100%;
	padding: 1rem;
	align-items: center;
	justify-content: center;

	/* Estilo del layout */
	display: grid;
	grid-gap: 10px;
	grid-template-rows: 0.2fr 1fr 1fr;
	grid-template-areas:
		'Nombre'
		'Orden'
		'Buscar';
`;

// Estilo para la entrada de texto
const TextoNombreEstilo = styled.div`
	grid-area: Nombre;
	display: grid;
	grid-gap: 15px;
`;

const SeleccionarOrdenEstilo = styled.div`
	grid-area: Orden;
	display: grid;
	grid-gap: 15px;
`;

const DescargarUsuariosEstilo = styled.div`
	padding-top: 50px;
	grid-area: Buscar;
`;

// Componente /////////////////////////////////////////////////////////////////////////
const FiltroListaProductos = ({ manejarFiltros, productosFiltrados }) => {
	// Parte 1. Crear los hooks a usar en el componente
	// Crear datos del formulario
	const { register, watch, handleSubmit } = useForm({
		defaultValues: {
			buscar: '',
			ordenarPor: 0
		}
	});

	// ESTO SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE

	// Parte 2. Funciones que se llaman con cada renderizado
	// Observar el valor de las entradas
	const { buscar, ordenarPor } = watch();

	// Solo para verificar que la data en el formulario es correcta
	const onSubmit = data => {
		console.log(data);

		console.log(productosFiltrados);
	};
	// Usamos la data en el formulario para cambiar el estado de filters en UserList
	useEffect(() => {
		manejarFiltros(buscar, ordenarPor);
	}, [buscar, ordenarPor]);

	// Parte 3. HTML que va a ser renderizado en UserList
	return (
		<FiltroListaProductosEstilo onSubmit={handleSubmit(onSubmit)}>
			{/* TEXTO CON NOMBRE PRODUCTO */}
			<TextoNombreEstilo>
				<label>Nombre producto:</label>
				<input type='text' {...register('buscar')}></input>
			</TextoNombreEstilo>
			{/* Hijo 2. Checkbox */}
			{/* CHECKBOX PARA SELECCIONAR ACTIVOS O TODOS */}
			{/* <UsuarioCheckBoxEstilo>
				<input type='checkbox' {...register('soloActivo')}></input>
				<span> Sólo activos</span>
			</UsuarioCheckBoxEstilo> */}
			{/* SELECT PARA SELECCIONAR ORDEN */}

			<SeleccionarOrdenEstilo>
				<label>Seleccionar orden: </label>
				<select
					{...register('ordenarPor', {
						valueAsNumber: true
					})}
				>
					<option value={0}>Por defecto</option>
					<option value={1}>Por nombre</option>
				</select>
			</SeleccionarOrdenEstilo>
			{/* BOTON PARA BUSCAR USUARIOS */}
			<DescargarUsuariosEstilo>
				<button type='submit'>Descargar Productos</button>
			</DescargarUsuariosEstilo>
		</FiltroListaProductosEstilo>
	);
};

export default FiltroListaProductos;
