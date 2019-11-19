const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const AplicacionSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String}
});

module.exports = mongoose.model('Aplicacion', AplicacionSchema);