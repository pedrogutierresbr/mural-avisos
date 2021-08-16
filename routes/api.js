const express = require("express");
const router = express.Router();
const posts = require("../model/posts.js");
const cors = require("cors");

router.use(cors());

//rota para buscar/pegar posts salvos
router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});

//rota para salvar novo post
router.post("/new", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPosts(title, description);

    res.send("Post adicionado com sucesso!");
});

//rota para deletar post
router.delete("/delete", (req, res) => {
    let id = req.body.id;

    posts.deletePost(id);

    res.send("Item deletado com sucesso!");
});

module.exports = router;
