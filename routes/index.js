var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
  { 
    title: 'page1', 
    string: 'this is the song that never ends',
    img: 'http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg',
    link: 'page2'
  });
});
      router.get('/:pages', function (req, res) {
      

        if ( req.params.pages === 'page2'){ 
          res.render('index', 
          { 
            title: 'another', 
            string: 'this is still the song that never ends',
            img: 'http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg',
            link: 'page3'
          })   
        }

        if (req.params.pages === 'page3') {
          res.render('index', { 
            title: 'another1', 
            string: 'this is still the song that never ends',
            img: 'http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg',
            link: 'page4'
          })          
   
        }
        
        if (req.params.pages === 'page4') {
          res.render('index', { 
            title: 'another2', 
            string: 'this is still the song that never ends',
            img: 'http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg',
            link: ''
          })        
   
        }
        
        });
          









module.exports = router;
