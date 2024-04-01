import { Application } from 'egg';
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';

interface TestCode extends Model<InferAttributes<TestCode>, InferCreationAttributes<TestCode>> {
  id: CreationOptional<number>;
  test_code: string;
  used: number;
}

export default (app: Application) => {
  return app.model.define<TestCode>('testCode', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    test_code: {
      type: DataTypes.STRING,
    },
    used: {
      type: DataTypes.INTEGER,
    },
  });
};
