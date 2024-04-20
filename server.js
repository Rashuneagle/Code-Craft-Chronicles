// Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const session = require('express-session');
