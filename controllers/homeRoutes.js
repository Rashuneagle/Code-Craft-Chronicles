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

//renders login.handlebars file  
  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;