const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log('Routers Loaded');


router.get('/', homeController.home);
// router.get('/practice', homeController.practice);
router.use('/users', require('./users'));
//router.use('/users/posts', require('./post'));

// for any further routes, access from here
// router.use('/routeName', require(./fileName));


module.exports = router;