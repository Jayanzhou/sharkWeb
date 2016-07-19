var express = require('express');
var router = express.Router();
var url = require('url');
var businessInfo = require('./businessInfo/businessInfo');
var service = require('./service/service');
var information = require('./information/information');
var drycargo = require('./drycargo/drycargo');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*公司简介页面*/
router.get('/business', function(req, res){
  res.render('businessIntro', {
    tag: 'companyDesc'
  });
});

/*拉取公司信息*/
router.get('/business_intro?', businessInfo.companyDesc);

/*服务页*/
router.get('/service', service.index);
/*资讯页*/
router.get('/information', information.index);
/*干货页*/
router.get('/drycargo', drycargo.index);

module.exports = router;
