const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return;
    }
    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
        user.setDataValue('password', hash)
    })
}


module.exports = (sequelize, DataTypes) => {
    const UserSchema = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    return UserSchema
}