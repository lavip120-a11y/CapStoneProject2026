"use strict";

const { Sequelize } = require("sequelize"); //import sequelize

// Sequelize is a package that abstracts out the need to write SQL queries, relying instead on their models to do it for you.
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
);

const connectMysql = async () => {
  //asynchronous function
  try {
    await sequelize.authenticate(); //wait to authenticate
    console.log(`Successful connection to MySQL MyCapstoneDatabase
${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Unable to connect to MySQL MyCapstoneDatabase:", error);
    process.exit(1);
  }
};
connectMysql(); //call function
module.exports = { Sequelize: sequelize }; //export
