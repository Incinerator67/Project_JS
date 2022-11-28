var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var Leviathan = require("./models/fauna").Leviathan


var fauna = new Leviathan({
  title: "Призрачный левиафан (англ. Ghost leviathan) – Данное существо по размеру приближается к пределу для жизнеспособных органических существ и принадлежит к классу левиафанов. Взрослые особи встречаются исключительно вокруг границ вулканического кратера, поддерживающего жизнь в этой части планеты, и реагируют при приближении крайне агрессивно.",
  nick: "Ghost_leviathan"
})


console.log(fauna)
fauna.save(function(err, fauna, affected){console.log(fauna.title)})
