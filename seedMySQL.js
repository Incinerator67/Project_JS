var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE leviathans;'
var seedQuery = 'INSERT INTO leviathans (title, nick, avatar, about) VALUES ("Призрачный левиафан", "Ghost_leviathan", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNXTEwrKIeOdzZY4Qi2CoaROrYOUEqzrbNNQxpe-eCP5QGdvuGRd3JGwiaEo0Zo1Etok&usqp=CAU", "Взрослые особи встречаются исключительно вокруг границ вулканического кратера, поддерживающего жизнь в этой части планеты,и реагируют при приближении крайне агрессивно.");'

var connection = mysql.createConnection({
    host : '127.0.0.1',
    port: '3306',
    user : 'root',
    password : 'jojodeyk078',
    database: 'Subnautica'
    });
    connection.connect()
    
    
    
    console.log("Running SQL seed...")
    
    
    // Drop content
    connection.query(drop, err => {
    if (err) {
    throw err
    }
    // Seed content
    connection.query( seedQuery, err => {
    if (err) {
    throw err
    }
    console.log("SQL seed completed!")
    connection.end()
    })
    })