var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
//const {Leviathan} = require("../models/fauna");
//var checkAuth = require("./../middleware/checkAuth.js")
//var async = require("async")

router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с Leviathan');
});

/* Страница ведущих */
router.get('/:nick' , function(req, res, next) {
  db.query(`SELECT * FROM leviathans WHERE leviathans.nick = '${req.params.nick}'`, (err, leviathans) => {
      if(err) {
      console.log(err);
      if(err) return next(err)
    }else {
      if(err) return next(err)
      if(leviathans.lenght == 0) return next(new Error("Такой Левиaфан не существует"))
      var fauna = leviathans[0];
      res.render('Faun', {
          title: fauna.title,
          picture: fauna.avatar,
          desc: fauna.about
          })
      }
  })
})
// Страница левиафанов 
/*
router.get("/:nick", checkAuth,function(req, res, next){
  Leviathan.findOne({nick:req.params.nick}, function(err,fauna)
  {
    if(err) return next(err)
    if(!fauna) return next(new Error("Такой Левиaфан не существует"))
    res.render("Faun", {
      title: fauna.title,
      picture: fauna.avatar,
      desc: fauna.desc
    })
  })
});
*/
/*
router.get('/:nick', function(req, res, next) {
  async.parallel([
    function(callback){Leviathan.findOne({nick:req.params.nick}, callback)},
    function(callback){Leviathan.find({},{_id:0,title:1,nick:1},callback)}
  ],
  function(err,result){
    if(err) return next(err)
    var leviathan = result[0]
    var s = result[1] || []
    if(!leviathan) return next(new Error("Такой Левиaфан не существует"))
    res.render('Faun', {
        title: leviathan.title,
        picture: leviathan.avatar,
        desc: leviathan.desc,
        menu: s
    });
  })
})
*/
module.exports = router