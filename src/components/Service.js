const _obtenerUsuarios = () => {
    let usuariosLS = JSON.parse(localStorage.getItem('usuariosLS'));
    
    return usuariosLS;
}

const _registrarUsuario = (objUsuario) => {
    let usuariosLS = _obtenerUsuarios(),
        err = false;

    if(usuariosLS != null){
        usuariosLS.forEach(usuario => {
            if(usuario.cedula === objUsuario.cedula){
                err = true;
            }
        });
    }else{
        usuariosLS = [];
    }


    if(!err){
        usuariosLS = [...usuariosLS, objUsuario];

        localStorage.setItem('usuariosLS', JSON.stringify(usuariosLS));
    }

    return err;
}

const Service = {
    registrarUsuario: _registrarUsuario,
};

export default Service;