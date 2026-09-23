const {Livro, Categoria}=require(../models);

class LivroRepository{
    listarTodos(){
        return Categoria.findAll();
    }
    criar(dados){
        return Categoria.create(dados);
    }
    buscarPorId(id){
        return Categoria.findByPk(id);
    }
    atualizar(id, dados){
        return Categoria.update(dados, {where: {categoriaId: id}});
    }
    excluir(id){
        return Categoria.destroy({where: {id: categoriaId}});
    }
}
module.exports=CategoriaRepository