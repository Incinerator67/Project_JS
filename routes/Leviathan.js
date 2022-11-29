/*var express = require('express');
var router = express.Router();
const {Leviathan} = require("../models/fauna");
var async = require("async")

router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с Leviathan');
});
// Страница левиафанов 
router.get("/:nick", function(req, res, next){
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
module.exports = router;*/

var express = require('express')
var router = express.Router()
var Leviathan = require("../models/fauna").Leviathan
var async = require("async")

router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с Leviathan')
});

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

module.exports = router