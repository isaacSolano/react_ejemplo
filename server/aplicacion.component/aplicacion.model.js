const mongoose = require('mongoose'),
    {Schema} = mongoose;

const aplicacionSchema = new Schema({
    nombre: {type: String, required: true, unique: true},
    descripcion: {type: String, required: true}
});

mongoose.model('aplicaciones', aplicacionSchema);