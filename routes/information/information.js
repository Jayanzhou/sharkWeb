/**
 * Created by jayan on 16-7-17.
 */
/*service module*/

var fs = require('fs');
var path = require('path');

exports.index = function(req, res) {
    var tag = req.query.tag;
    /*抓取对应页面的元素信息*/
    if (tag) {
        var fileName = 'inform/' + tag + '.ejs';
        fs.readFile(path.join(__dirname, fileName), {encoding: 'utf-8', flag: 'r'}, function (err, data) {
            if (err) {
                console.log(err);
                console.log('读取文件' + fileName + '出错！');
            } else {
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write(data);
                res.end();
            }

        });
    } else {
        res.render('information');
    }

}

exports.indexpage = function(req, res){
    var tag = req.query.tag;
    var data = {
        tag: tag
    };
    res.render('information', data);
}