import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

let user = (sequelize) => {
  return (user = sequelize.define("Users", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  ));
};

let createUser = (user, role) => {
    user.belongsTo(role);
  user.sync({ alter: true })
};

module.exports = { user: user, createUser: createUser };
