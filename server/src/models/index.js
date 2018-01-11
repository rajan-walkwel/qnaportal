const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const UserSchema = require('./User')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

sequelize
  .authenticate()
  .then(function(err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
  });

const User = UserSchema(sequelize, Sequelize)
User.sync()
module.exports = User