import Sequelize from 'sequelize';
const {DataTypes} = Sequelize;

let role = (sequelize) => {
    return role = sequelize.define(
        'role', {
            role_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },{
              timestamps: false
        }
    );
}

let createRole = (role, data) => {
    role.sync({alter: true})
}
module.exports = {
    role:role,
    createRole:createRole
};
