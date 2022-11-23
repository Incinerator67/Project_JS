var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test')
var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
  console.log(this.get("name") + " издал громкий рёв")
}

var Leviathan = mongoose.model('Leviathan', schema)

var kitty = new Leviathan({ name: 'Reaper-Leviathan' })
kitty.save(function (err) {kitty.meow()})