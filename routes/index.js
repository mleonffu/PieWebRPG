var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/playerlevel', function(req, res) {
    var db = req.db;
    var collection = db.get('playerData');
    collection.find({},{},function(e,docs){
        res.render('playerlevel', {
            "playerlevel" : docs
        });
    });
});







/* POST to Add User Service */
router.post('/playerlevel', function(req, res) {
    var db = req.db;
    var userName = req.body.username;
    var collection = db.get('playerData');
    collection.insert({
        "Username" : userName
    });
	res.redirect("/playerlevel")
});

module.exports = router;
