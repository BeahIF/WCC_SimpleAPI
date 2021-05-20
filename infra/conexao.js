const mysql = require('mysql2');
const conexao = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'Bea',
    password:'Be@triz1',
    database:'agendawcc'
})

module.exports =conexao;