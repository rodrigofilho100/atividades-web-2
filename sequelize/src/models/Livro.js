const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require("../config/database");

class Livro extends Model{}

Livro.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  isbn:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  ano:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:true
  },
  disponivel:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  autorId:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
    {
        sequelize,
        modelName: "Livro"
        ,
        tableName: "livros"
}
);

module.exports = Livro;
