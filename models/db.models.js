const { noBoolOperatorAliases } = require('sequelize/lib/utils/deprecations');
const dbconfig = require('../config/db.config');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD, {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        noBoolOperatorAliases: false // for overwriting all the errors
    }
);

sequelize.authenticate().then( () =>{
    console.log("Connected to db");

}).catch(error => {
    console.log("Error " + error);
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, DataTypes);


module.exports = db;