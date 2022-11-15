var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { 
    title: "Subnautica Wiki", 
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLid5N3GC1HYWjUoZ8Ok7QQ6wAEJTF3ZdEtA&usqp=CAU",
    desc: "Нырните в глубины инопланетного океана, наполненные чудесами и опасностями! Создавайте снаряжение, управляйте подлодками. Перехитрите местные формы жизни чтобы исследовать цветущие коралловые рифы, вулканы, системы пещер и другие природные чудеса. Раскройте тайну планеты 4546B! И всё это — пытаясь выжить."
  });
});
/* GET home page. */
router.get('/Reaper_Leviathan', function(req, res, next) {
  res.render('Sub.ejs', { 
    title: "Жнец-левиафан", 
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPzs9-KAqmKmjFsPWvOCakiEeaacvVRRza17itMp1mEKq0zctAhMJB_N14djbGHrhp1s&usqp=CAU",
    desc: "Жнец-левиафан (англ. Reaper Leviathan) – гигантская хищная форма жизни, принадлежащая к категории фауна класса «левиафан». Очень опасен и может легко убить игрока, либо лишить его транспорта. Является самым опасным противником для транспорта, так как с одного захвата способен уничтожить Мотылёк или с двух захватов костюма КРАБ (обычно уничтожает с 3-4)."
  });
});
/* GET home page. */
router.get('/Crabsnake', function(req, res, next) {
  res.render('Sub.ejs', { 
    title: "Крабозмей", 
    picture: "https://media.indiedb.com/cache/images/games/1/29/28159/thumb_620x2000/CloseEncounterLarge-1024x606.jpg",
    desc: "Крабозмей (англ. Crabsnake) - это гигантский и уникальный хищник, имеющий симбиотическую связь с медузным грибом. Обитает только в пещерах медузных грибов, где водится в больших количествах (10-15 штук на локацию). Имеет длинное змеевидное тело с двумя полупрозрачными плавниками, проходящими по всему телу. Окрас розовый с красными пятнами. Около рта есть два острых жвала, служащих для захвата пищи."
  });

});
router.get('/Warper', function(req, res, next) {
  res.render('Sub.ejs', { 
    title: "Страж", 
    picture: "https://i.pinimg.com/originals/99/4d/a1/994da1a092508e772a7daa33fd094728.jpg",
    desc: "Страж (англ. Warper) – биомеханическая форма жизни, принадлежащая к категории фауны. Он имеет возможность открывать портал для телепортации, с помощью которого игрока переносит к существу (обычно не нанося урона), чтобы ударить вблизи. Также могут телепортировать игрока из транспорта, делая его лёгкой добычей. Ещё Стражи любят играть, телепортируя опасных существ поближе к игроку."
  });

});
module.exports = router;
