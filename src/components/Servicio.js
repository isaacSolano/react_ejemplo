import axios from 'axios';

const _obtenerTodasLasAplicaciones = () => {
    let aplicacionesBD = axios.get('/api/obtener_aplicaciones');
    
    return aplicacionesBD;
}

const _registrarAplicacion = async(objNuevaAplicacion) => {
    let err = (await axios.post('/api/registrar_aplicacion', objNuevaAplicacion)).data;

    return err;
}

const Servicio = {
    registrarAplicacion: _registrarAplicacion,
    obtenerTodasLasAplicaciones: _obtenerTodasLasAplicaciones,
};

export default Servicio;