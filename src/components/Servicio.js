import axios from 'axios';

const _obtenerAplicaciones = () => {
    let aplicacionesBD = JSON.parse(localStorage.getItem('usuariosLS'));
    
    return aplicacionesBD;
}

const _registrarAplicacion = async(objNuevaAplicacion) => {
    let err = await axios.post('http://localhost:5000/api/registrar_aplicacion', objNuevaAplicacion);

    return err;
}

const Servicio = {
    registrarAplicacion: _registrarAplicacion,
    obtenerAplicaciones: _obtenerAplicaciones,
};

export default Servicio;