const NewState = require('../models/new-state');
const newStateController = {};

newStateController.createState = async (req, res) => {
    const newState = new NewState(req.body);
    await newState.save();
    res.json({
        'mensaje': 'Usuario guardado'
    });
}


module.exports = newStateController;

