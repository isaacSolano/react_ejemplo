const mongoose = require('mongoose'),
    Aplicacion = mongoose.model('aplicaciones');

module.exports = (app) => {
    app.post('/api/registrar_aplicacion', async (req, res) => {
        let aplicacion = await Aplicacion.create(req.body)
        .then( aplicacion => {
            res.json(false);
        })
        .catch( err => {
            res.send(true);
            res.send(err);
        });
    });

    app.get('/api/obtener_aplicaciones', async(req, res) => {
        let aplicacionesBD = await Aplicacion.find();

        return res.send(aplicacionesBD);
    });
}