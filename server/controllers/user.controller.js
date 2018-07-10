const Usuario = require('../models/usuarios');
const userController = {};
// const jwt = require('jsonwebtoken');

userController.getUsers = async (req, res) => {
    const usuarios = await Usuario.find(); 
    res.json(usuarios);
}

userController.createUser = async (req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        'mensaje': 'Usuario guardado'
    });
}

userController.getUser = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario)
    
}
userController.editUser = async (req, res) => {
    const { id } = req.params;
    const usuario = {
        name: req.body.name,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        pais: req.body.pais
    }
    await Usuario.findByIdAndUpdate(id, {$set: usuario},{new: true});
    res.json({
        'mensaje': 'Usuario actualizado'
    });
}

userController.deleteUser = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        'mensaje': 'Usuario eliminado'
    });
}

userController.login = (req, res) => {
    const user = {id: 3};
    const token = jwt.sign({user}, 'secret_token');
     res.json({
        token
    })
}



module.exports = userController;