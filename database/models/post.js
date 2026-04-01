const { DataTypes, Model } = require("sequelize");
//import sequelise - the datatypes and model
let dbConnect = require("../dbConnect");
//import the connection

const sequelizeInstance = dbConnect.Sequelize;
//create a class for Post table in MYSQL database
class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize: sequelizeInstance, //connection from sequelizeInstance
    modelName: "posts", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  },
);

module.exports = Post;
