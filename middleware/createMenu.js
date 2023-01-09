var db = require('../mySQLConnect.js');

module.exports = function(req,res,next){
    res.locals.nav = []
    db.query(`SELECT * FROM leviathans`, (err, leviathans) => {  
        if(err) throw err
        res.locals.nav = leviathans
        next()
    })
}