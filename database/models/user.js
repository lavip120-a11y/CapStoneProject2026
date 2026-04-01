const { DataTypes, Model } = require("sequelize");
//import sequelise - the datatypes and model
let dbConnect = require("../dbConnect");
//import the connection

const sequelizeInstance = dbConnect.Sequelize;
//create a class for User table in database
class User extends Model {}
// Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    //create schema
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    sequelize: sequelizeInstance, //connection from sequelizeInstance
    modelName: "users", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  },
);

module.exports = User;
