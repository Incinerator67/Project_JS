var express = require('express');
var router = express.Router();
const {Leviathan} = require("../models/fauna");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с Leviathan');
});
/* Страница левиафанов */
router.get("/:nick", function(req, res, next) {
  Leviathan.findOne({nick:req.params.nick}, function(err,fauna){
    if(err) return next(err)
    if(!fauna) return next(new Error("Такой Левиaфан не существует"))
    res.render("fauna", {
      title: fauna.title,
      picture: fauna.avatar,
      desc: fauna.desc
    })
  })
});
module.exports = router;
