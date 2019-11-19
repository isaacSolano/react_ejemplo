import React, {useState} from 'react';

import Service from '../Service';
import Swal from 'sweetalert2';

const Registro = () => {
    /* Empiezan funciones */
    let [usuario, setUsuario] = useState({}),
        [err, setErr] = useState({});

    const admCambio = (e) => {
        if(e.target.value === ''){
            setErr(
                {...err, [e.target.name]: true}
            );
        }else{
            setUsuario(
                {...usuario, [e.target.name]: e.target.value}
            );
        }
    }

    const admRegistrar = (e) => {
        e.preventDefault();

        let err = Service.registrarUsuario(usuario);

        if(err) {
            Swal.fire(
                ':(',
                'Hubo un problema con el registro',
                'error'
            )
        }else{
            Swal.fire(
                ':)',
                'Usuario registrado exitosamente',
                'success'
            )
        }
    }
    /* Terminan funciones */
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-md-12 text-center p-5">
                        <h1>Registro</h1>
                    </div>
                </div>

                <div className="row">
                    <form className="col-md-6 text-left mx-auto" onSubmit={admRegistrar}>
                        <div className="form-group">
                            <label>Cedula</label>
                            <input type="number" className={`form-control ${err.cedula && 'border border-danger'}`} name="cedula" onChange={admCambio}/>
                        </div>
                        
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" className={`form-control ${err.nombre && 'border border-danger'}`} name="nombre" onChange={admCambio}/>
                        </div>

                        <div className="form-group">
                            <label>Apellidos</label>
                            <input type="text" className={`form-control ${err.apellidos && 'border border-danger'}`} name="apellidos" onChange={admCambio}/>
                        </div>

                        <div className="form-group">
                            <label>Edad</label>
                            <input type="number" className={`form-control ${err.edad && 'border border-danger'}`} name="edad" onChange={admCambio}/>
                        </div>

                        <input type="submit" value="Registrar" className="btn btn-primary"/>
                    </form>
                </div>

                <div className="row">
                    
                </div>
            </div>
        </>        
    )
};

export default Registro;