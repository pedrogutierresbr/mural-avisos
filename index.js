const express = require("express");
const posts = require("./model/posts");

const port = 3005;
const app = express();

app.use(express.json());

//rota para buscar/pegar posts salvos
app.get("/all", (req, res) => {
    res.json(posts.getAll());
});

//rota para salvar novo post
app.post("/new", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPosts(title, description);

    res.send("Post adicionado com sucesso!");
});

//rota para deletar post
app.delete("/delete", (req, res) => {
    let id = req.body.id;

    posts.deletePost(id);

    res.send("Item deletado com sucesso!");
});

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
