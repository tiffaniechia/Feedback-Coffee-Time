var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Feedback Coffee Time' });
});

router.post('/api/initial', function(req, res, next) {
    console.log(req.body.teamName);
    res.render('index', { title: req.body.teamName });
  //res.send({ teamName: req.body.teamName });
});


module.exports = router;
