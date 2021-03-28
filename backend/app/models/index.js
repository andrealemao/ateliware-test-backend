const Sequelize = require('sequelize')
const sequelize = new Sequelize('ateliwaredevteste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.repositories = require('./repositories.model')(sequelize, Sequelize)

module.exports = db