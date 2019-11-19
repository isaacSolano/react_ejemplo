const express = require('express'),
        router = express.Router(),
        AplicacionModel = require('./aplicacion.model');

router.route('/registrar_aplicacion')
    .post( (req, res) => {
        const newAplicacion = new AplicacionModel(req.body);
        newAplicacion.save()
            .then(newAplicacion => {
                res.json(true);
                console.log(newAplicacion);
            })
            .catch(err => {
                res.send(false);
                res.send(err);
            });
    });

module.exports = router;