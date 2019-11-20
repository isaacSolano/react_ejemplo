const express = require('express'),
        mongoose = require('mongoose'),
        bodyParser = require('body-parser');

require('./aplicacion.component/aplicacion.model');

const app = express();

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://root:root@cluster0-nxlid.mongodb.net/app_reader?retryWrites=true&w=majority`).then(
    () => console.log(`Base de datos conectada`),
    (err) => console.log(`Error al conectar a la base de datos ${err}`)
);

app.use(bodyParser.json());

require('./aplicacion.component/aplicacion.router')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor conectado en el puerto ${PORT}`);
});