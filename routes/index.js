var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log('profile', profile.displayName)
console.log('req.user:', req.user);
  res.render('index', { title: 'Express' });
});
router.get('/logout', function(req, res, next) {
  req.session = null
  res.redirect('/')
})

module.exports = router;
