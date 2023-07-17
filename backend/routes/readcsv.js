const express = require('express');
const {csv} = require('../controllers/readcsv.js');

const router = express.Router();

router.get('/',csv)


module.exports = router;
