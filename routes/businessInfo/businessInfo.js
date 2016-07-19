/**
 * Created by jayan on 16-7-11.
 */

var fs = require('fs');
var path = require('path');

/*公司信息介绍路由信息*/
exports.companyDesc = function(req, res){
    var tag = req.query.tag;
    /*抓取对应页面的元素信息*/
    var fileName = 'busInfo/' + tag + '.ejs';
    fs.readFile(path.join(__dirname, fileName), {encoding:'utf-8', flag: 'r'}, function(err, data){
        if(err){
            console.log(err);
            console.log('读取文件'+fileName+'出错！');
        }else{
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.write(data);
            res.end();
        }

    });

}



