// const { Model, DataTypes } = require('sequelize');
// // const db = require('./sequelize.js');
// const db = require('./index.js');
// const User = require('./User.js');

// class Task extends Model {}

// Task.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     completed: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//       allowNull: false,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'User',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize: db.Sequelize,
//     modelName: 'Task',
//     tableName: 'tasks',
//     timestamps: true,
//   }
// );


// User.hasMany(Task, { foreignKey: 'userId' });
// Task.belongsTo(User, { foreignKey: 'userId' });

// module.exports = Task;

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: true,
  });

  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Task;
};