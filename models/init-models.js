var DataTypes = require("sequelize").DataTypes;
var _task = require("./task");
var _user = require("./user");

function initModels(sequelize) {
  var task = _task(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  task.belongsTo(user, { as: "assignee_user", foreignKey: "assignee"});
  user.hasMany(task, { as: "tasks", foreignKey: "assignee"});

  return {
    task,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
