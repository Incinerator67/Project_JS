var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var Subnautica = mongoose.model('Sub', { name: String })

var kitty = new Warper({ name: 'Страж;' })
kitty.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Портал')
    }
})
