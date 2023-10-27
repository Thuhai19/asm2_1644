var express = require('express');
const UserModel = require('../models/UserModel');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('userLayout');
});
router.post('/', async (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username, password);

  var login = false;

  var users = await UserModel.find()

  for (let i = 0; i < users.length; i++)
    if (username == users[i].username && password == users[i].password) {
      login = true;
      break;
    }
  if (login) {
    res.redirect('/home');
  } else {
    res.redirect('/');
  }
})

module.exports = router;