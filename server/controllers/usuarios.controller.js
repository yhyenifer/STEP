const Usuario = require('../models/usuarios');

const usuarioCtrl = {};

//listar usuarios
usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find({ state: "true" });
    res.json(usuarios);
    // otra forma de hacerlo, para ver el error
    // Conductor.find()
    // .then(usuarios =>  res.json(usuarios))
    // .catch(err => console.log(err));

};

async function validar_nickUsu(nickame) {
    return await Usuario.find({ username: nickame });
}

// crear usuario
usuarioCtrl.createUsuario = async (req, res) => {
    console.log('guardar');
    console.log(req.body);
    const validacion = await validar_nickUsu(req.body.username);
    if (validacion == 0) {
        const usuario = new Usuario({
            username: req.body.username,
            name: req.body.name,
            password: req.body.password,
            role: req.body.role,
            state: true

        });

        await usuario.save();
        res.json({
            status: 'Usuario Guardado Exitosamente', success: 'true'
        });
    } else {
        res.json({ status: 'Verificar el nickname del usuario, el ingresado, ya existe', success: 'false' });

    }
};

// consultar por un usuario especifico
usuarioCtrl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};


// actualizar un usuario especifico
usuarioCtrl.updateUsuario = async (req, res) => {
    const { id } = req.params;
    const validacion = await validar_nickUsu(req.body.username);
    if (validacion != 0) {
        validacion.map(async dato => {
            if (id == dato._id) {
                const newUsuario = {
                    _id: req.body.username,
                    username: req.body.username,
                    name: req.body.name,
                    password: req.body.password,
                    role: req.body.role,
                    state: true
                }

                await Usuario.findByIdAndUpdate(id, { $set: newUsuario }, { new: true });
                res.json({ status: 'Usuario Actualizado Exitosamente' });
            }
            else {
                res.json({ status: 'Verificar el nickname del usuario, el ingresado, ya existe', success: 'false' });
            }
        });

    }
    else {
        res.json({ status: 'El usuario no esta creado', success: 'false' });

    }

};

// Eliminar un usuario especifico
usuarioCtrl.deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const newState = {
        state: req.body.state
    }
    await Usuario.findByIdAndUpdate(id, { $set: newState }, { new: true });
    res.json({ status: 'Usuario Eliminado Exitosamente' });
};



module.exports = usuarioCtrl;