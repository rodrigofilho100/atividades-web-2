const Autor = require("./Autor");
const Livro = require("./Livro");
const Categoria = require("./Categoria");


Autor.hasMany(Livro, {
foreignKey: "autorId"
});
Livro.belongsTo(Autor, {
foreignKey: "autorId"
});

Livro.belongsToMany(Categoria, {
through: "livro_categorias"
});
Categoria.belongsToMany(Livro, {
through: "livro_categorias"
});
