var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test1')
var Leviathan = require("./models/fauna").Leviathan


var fauna = new Leviathan({
  title: "Призрачный левиафан (англ. Ghost leviathan)",
  nick: "Ghost_leviathan"
})


console.log(fauna)
fauna.save(function(err, fauna, affected){console.log(fauna.title)})
