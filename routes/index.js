const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller')

router.get('/', homeController.home);
router.get('/practice', homeController.practice);
console.log('Routers Loaded');

// router.get()


module.exports = router;