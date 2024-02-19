const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Define que se tiene que analizar la solicitud del body con un formato JSON
app.use(bodyParser.json());

// Ruta para enviar un mensaje, ya sea personalizado o no
app.get('/api/hello', (req, res) => {
    const message = req.query.message;
    let Respuesta;

    if (message) {
        Respuesta = [{ "Response": `Hello ${message}` }]
    } else {
        Respuesta = [{ "Response": "Hello World" }]
    }

    res.json(Respuesta);
});

// Ruta para subir un usuario y devolver un mensaje personalizado
app.post('/api/post/user', async (req, res) => {
    const Respuesta = [{
        "Respuesta": `El usuario ${req.body.name} ${req.body.lastname} fue creado`
    }]
    res.json(Respuesta);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor API web escuchando en http://localhost:${port}`);
});
