const server = require('express');
const app = server();
const cors = require("cors");

const transactionsController = require("./controllers/transactions.controller")

app.use(server.json());

//NOTA; queda pendiente ejecutar el cors en nuestra app para poder conectar con react.
app.use(cors());

//Establezcamos nuestras ruta(s):

app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
    res.send("Welcome to my first FullStack app");
});

//lets create a redirect (just in case)

app.get("/*", (req, res) => {
    res.status(404).send("Page doesn't exist");
});

app.listen(3001, () => console.log("I'm working great"));

module.exports = app;

