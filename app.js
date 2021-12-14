const express = require("express");
const app = express();
const path = require('path');
app.use(express.static("public"))


app.listen(process.env.PORT || 3000, () =>
    console.log("Levantando un servidor con Express"))
app.get('/', (req, res) => {
    const pathHtml = path.join(__dirname, "/views/home.html")
    res.sendFile(pathHtml)
});
app.get('/registro', (req, res) => {
    const pathHtml = path.join(__dirname, "/views/registro.html")
    res.sendFile(pathHtml)
});
app.get('/login', (req, res) => {
    const pathHtml = path.join(__dirname, "/views/login.html")
    res.sendFile(pathHtml)
});