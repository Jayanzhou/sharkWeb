var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*公司简介页面*/
router.get('/bussiness_intro', function(req, res){
  res.render('businessIntro', {
    tag: 'business'
  });
});

module.exports = router;
