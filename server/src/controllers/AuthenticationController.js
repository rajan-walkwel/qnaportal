const User  = require('../models')
const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
const config = require('../config/config')


// helper method
function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            res.send({
                user: user.toJSON()
            })
        } catch (error) {
            res.status(400).send({
                error: 'This email is already exist'
            })
        }
    },
    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            console.log('---', password, user.password)
            const isPasswordValid = await function (password) {
                return bcrypt.compareAsync(password, user.password)
            }
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login password was incorerect'
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (error) {
            res.status(500).send({
                error: 'Error has occured trying to log in.'
            })
        }
    }
}