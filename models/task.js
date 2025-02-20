const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task', {
    taskRef: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    shortDesc: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'userId'
      }
    },
    dueDate: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    timeSpent: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'task',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "taskRef" },
        ]
      },
      {
        name: "taskRef_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "taskRef" },
        ]
      },
      {
        name: "assignee_idx",
        using: "BTREE",
        fields: [
          { name: "assignee" },
        ]
      },
    ]
  });
};
