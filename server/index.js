const express = require('express'),
    bodyParser = require('body-parser'),
    pino = require('express-pino-logger'),
    mongoose = require('mongoose'),
    app = express(),
    dburl = 'mongodb+srv://root:root@cluster0-nxlid.mongodb.net/app_reader?retryWrites=true&w=majority',
    PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.listen(PORT, () =>
  console.log(`Servidor conectado en el puerto ${PORT}`)
);

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(dburl).then(
    () => {console.log('Base de datos conectada')},
    err => {console.log(`Error al conectar a la base de datos => ${err}`)}
);

let aplicacionRouter = require('./aplicacion.component/aplicacion.router');

app.use('/api', aplicacionRouter);