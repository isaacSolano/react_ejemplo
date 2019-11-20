import React, {useState} from 'react';

const Listar = (props) => {
    let [aplicacionesBD, setAplicacionesBD] = useState(props.aplicaciones);

    const admCambio = (e) => {
        let listaActual = [];

        if(e.target.value !== ''){
            props.aplicaciones.filter( aplicacion => {
                let filtro = e.target.value.toLowerCase();

                if(aplicacion.nombre.toLowerCase().includes(filtro)){
                    listaActual = ([...listaActual, aplicacion]);
                }
            });
        }else{
            listaActual = ([...listaActual]);
        }

        setAplicacionesBD(listaActual);
    }
    
    return (
        <>
            <div className="col-md-12">
                <input type="text" className="form-control mb-4" placeholder="Buscar por nombre..." onChange={admCambio}/>

                <table className="table text-center">
                    <thead>
                        <tr className="row">
                            <th className="col-md-4" scope="col">Nombre</th>
                            <th className="col-md-4" scope="col">Descripción</th>
                            <th className="col-md-4" scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aplicacionesBD === null ? (
                            <tr className="row">
                                <td className="col-md-12 p-5" colSpan="2">Aún no hay registros</td>
                            </tr>
                        ) : (
                            aplicacionesBD.map( (aplicacion) => (
                                <tr key={aplicacion._id} className="row">
                                    <td className="col-md-4" colSpan="1">{aplicacion.nombre}</td>
                                    <td className="col-md-4" colSpan="2">{aplicacion.descripcion}</td>
                                    <td className="col-md-4" colSpan="3">Eliminar</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Listar;