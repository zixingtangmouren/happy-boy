import { Application } from 'egg';
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>;
  username: string;
  password: string;
  test_code_id: string;
}

export default (app: Application) => {
  return app.model.define<UserModel>('user', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    test_code_id: {
      type: DataTypes.STRING,
    },
  });
};
