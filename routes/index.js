var express = require('express');
var router = express.Router();
var Leviathan = require("../models/fauna").Leviathan
/* GET home page. */
/*
 router.get('/', function(req, res, next) {
  res.render('index.ejs', {
    title: "Subnautica Wiki", 
    picture: "https://wallpapers.com/images/hd/subnautica-aurora-hd-ztg7wcpamepkrpuo.jpg",
    desc: "Нырните в глубины инопланетного океана, наполненные чудесами и опасностями! Создавайте снаряжение, управляйте подлодками. Перехитрите местные формы жизни чтобы исследовать цветущие коралловые рифы, вулканы, системы пещер и другие природные чудеса. Раскройте тайну планеты 4546B! И всё это — пытаясь выжить."
  });
});

router.get('/Reaper_Leviathan', function(req, res, next) {
  res.render('Sub.ejs', { 
    title: "Жнец-левиафан", 
    picture: "https://i.pinimg.com/originals/ac/f2/26/acf226edd7043c36b1fdf64977155c01.jpg",
    desc: "Жнец-левиафан (англ. Reaper Leviathan) – гигантская хищная форма жизни, принадлежащая к категории фауна класса «левиафан». Очень опасен и может легко убить игрока, либо лишить его транспорта. Является самым опасным противником для транспорта, так как с одного захвата способен уничтожить Мотылёк или с двух захватов костюма КРАБ (обычно уничтожает с 3-4)."
  });
});
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
router.get('/Sea_dragon', function(req, res, next) {
  res.render('Sub.ejs', { 
    title: "Морской дракон", 
    picture: "https://preview.redd.it/bnebednfvbvy.jpg?auto=webp&s=7a87f873f9bd2da6c8fd5ad4886cabde6ca3fa86",
    desc: "Морской дракон-левиафан (англ. Sea Dragon leviathan) — это гигантская хищная форма жизни, принадлежащая к категории фауна и обитающая в условиях повышенных температур.Является верхним звеном пищевой цепи тропического региона планеты 4546B. Известно о трёх живых особях: два морских дракона плавают вокруг Лавового замка, а третий обитает в Активной лавовой зоне."
  });
});
router.get('/Ghost_leviathan', function(req, res, next) {
  res.render('Sub.ejs', { 
    title: "Призрачный левиафан", 
    picture: "https://i.imgur.com/MGhixN7.jpg",
    desc: "Призрачный левиафан (англ. Ghost leviathan) — это гигантская враждебная форма жизни, принадлежащая к категории фауна из весомого класса «левиафан».Левиафан обладает таким же строением тела, как Электрический угорь. На теле 10 «ножек-плавников» (6 спереди и 4 сзади). Голова своеобразная, напоминает голову Акулы молота, глаза мелкие, рот тоже."
  });
});
*/

router.get('/', function(req, res, next) {
  Leviathan.find({},{_id:0,title:1,nick:1},function(err,menu){
    res.cookie('greeting','Hi!!!').render('index', {
      title: 'Express',
      menu: menu
    });
  })
});


module.exports = router;
