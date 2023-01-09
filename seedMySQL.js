var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE leviathans;'
var seedQuery = 'INSERT INTO leviathans (title, nick, avatar, about) VALUES ("Теневой левиафан", "Shadow_Leviathan", "https://bosslevelgamer.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/04/subnauticas-leviathans-ranked-from-least-to-most-terrifying.jpg", "Данный массивный левиафан длиной более 60м, по всей видимости, появился из-за стечения нескольких эволюционных ветвей.");'

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