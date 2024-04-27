const router = require('express').Router();
const { Posts, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    res.render('homepage', {});

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

//create login.handlebars file  
// res.render('login');
  res.render('homepage');
});

router.get('/dashboard',  async (req, res) => {
  try {


    res.render('dashboard', {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;