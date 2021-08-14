module.exports = {
    posts: [{ id: "1", title: "Teste 1", description: "Descrição do teste" }],

    getAll() {
        return this.posts;
    },

    newPosts(title, description) {
        this.posts.push({ id: genereateId(), title, description });
    },

    deletePost(id) {
        this.posts = this.posts.filter((post) => post.id !== id);
    },
};

function genereateId() {
    //Usando base 36, tenho letras envolvidas
    return Math.random().toString(36).substring(2);
}
