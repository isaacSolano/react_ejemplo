import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';

import Servicio from '../Servicio';
import Listar from '../Listar/Index';

const Registro = () => {
    /* Empiezan funciones */
    let [aplicacion, setAplicacion] = useState({}),
        [err, setErr] = useState({}),
        [aplicacionesBD, setListaAplicacionesBD] = useState([]);

    useEffect( () => {
        let obtenerTodasLasAplicaciones = async() => {
            let todasLasAplicaciones = await Servicio.obtenerTodasLasAplicaciones();

            setListaAplicacionesBD(todasLasAplicaciones.data);
        }

        obtenerTodasLasAplicaciones();
    });

    const admCambio = (e) => {
        if(e.target.value === ''){
            setErr(
                {...err, [e.target.name]: true}
            );
        }else{
            setAplicacion(
                {...aplicacion, [e.target.name]: e.target.value}
            );
        }
    }

    const admRegistrar = async(e) => {
        e.preventDefault();

        let err = await Servicio.registrarAplicacion(aplicacion);
        
        if(err) {
            Swal.fire(':(', 'Verifique que el nombre de la aplicación no se repita', 'error');
        }else{
            Swal.fire(':)', 'Aplicación registrada exitosamente', 'success');
        }
    }
    /* Terminan funciones */
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-md-12 text-center p-5">
                        <h1>Registro de aplicaciones</h1>
                    </div>
                </div>

                <div className="row">
                    <form className="col-md-6 text-left mx-auto" onSubmit={admRegistrar}>
                        <div className="form-group">
                            <label>Nombre de la aplicación</label>
                            <input type="text" className={`form-control ${err.nombre && 'border border-danger'}`} name="nombre" onChange={admCambio}/>
                        </div>

                        <div className="form-group">
                            <label>Descripción del proyecto</label>
                            <textarea rows="10" className={`form-control ${err.descripcion && 'border border-danger'}`} name="descripcion" onChange={admCambio}></textarea>
                        </div>

                        <input type="submit" value="Registrar aplicación" className="btn btn-primary"/>
                    </form>
                </div>

                <div className="row py-5">
                    <Listar aplicaciones={aplicacionesBD}/>
                </div>
            </div>
        </>        
    )
};

export default Registro;