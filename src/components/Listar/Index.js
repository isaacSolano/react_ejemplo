import React, {useState} from 'react';

const Listar = (props) => {
    let usuariosLS = props.usuarios;
    
    return (
        <>
            <table className="table text-center col-md-12 pt-5">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {usuariosLS == null ? (
                        <tr>Aun no hay registros</tr>
                    ) : (
                        usuariosLS.map( (usuario) => (
                            <tr key={usuario.cedula}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellidos}</td>
                                <td>{usuario.edad}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Listar;