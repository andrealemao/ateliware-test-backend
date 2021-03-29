const Sequelize = require('sequelize')
// const sequelize = new Sequelize('ateliwaredevteste', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
// })
const sequelize = new Sequelize('mysql-ateliware', 'b13d423df69031', '4372da29', {
    host: 'us-cdbr-east-03.cleardb.com',
    port: 3306,
    dialect: 'mysql'
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.repositories = require('./repositories.model')(sequelize, Sequelize)

module.exports = db