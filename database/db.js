module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        database: 'myapp',
        user: 'root',
        password: ''
    }
});