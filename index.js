const express = require("express");

const port = 3005;
const app = express();

let posts = [
    { id: "1", title: "Teste 1", descricao: "Descrição do teste" },
    { id: "2", title: "Teste 2", descricao: "Descrição do teste" },
    { id: "3", title: "Teste 3", descricao: "Descrição do teste" },
];

//rota para buscar/pegar posts salvos
app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
});

//rota para salvar novo post
app.post("/new", (req, res) => {});

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
