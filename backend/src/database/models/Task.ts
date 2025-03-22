import { Model, DataTypes} from 'sequelize';
import db from './sequelize.js';
import { User } from './User.js';

export class Task extends Model {
  // public id!: number;
  // public title!: string;
  // public description!: string;
  // public completed!: boolean;
  // public userId!: number;
  // public createdAt!: Date;
  // public updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  },
  {
    sequelize: db,
    modelName: 'Task',
    tableName: 'tasks'
  }
);

User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });