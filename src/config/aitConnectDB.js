import Sequelize from "sequelize";
import roleModel from '../models/role';
import userModel from '../models/user';
const sequelize = new Sequelize ('ait_system', 'root', '29061993', {
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

let db = () => {
    
    const role = roleModel.role(sequelize);
    
    roleModel.createRole(role)

    const user = userModel.user(sequelize);
    userModel.createUser(user,role);
    
}

module.exports = db