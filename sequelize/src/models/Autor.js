const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require("../config/database");

class Autor extends Model{}

Autor.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nacionalidade:{
    type: DataTypes.STRING,
    allowNull: true
  }
},
    {
        sequelize,
        modelName: "Autor"
        ,
        tableName: "autores"
}
);

module.exports = Autor;
