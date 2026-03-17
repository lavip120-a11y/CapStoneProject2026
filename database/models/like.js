const { DataTypes, Model } = require("sequelize");
//import sequelise - the datatypes and model
let dbConnect = require("../dbConnect");
//import the connection

const sequelizeInstance = dbConnect.Sequelize;
//create a class for Like table in MYSQL database
class Like extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Like.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    emoji: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize: sequelizeInstance, //connection from sequelizeInstance
    modelName: "likes", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  },
);
module.exports = Like;
