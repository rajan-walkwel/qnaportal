module.exports = {
    port: process.env.PORT || 8082,
    db: {
        database: process.env.DB_NAME || 'qnaportal',
        user: process.env.DB_USER || 'qnaportal',
        password: process.env.DB_PASSWORD || 'qnaportal',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './qnaportal.sqlite'
        }
    }
}