const express = require('express');
const app = express();
const path = require('path')


//Puerto configurado bajo variable de entorno.
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
});


// Configura express para archivos desde /public
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado correctamente en el puerto ${port}`);
});