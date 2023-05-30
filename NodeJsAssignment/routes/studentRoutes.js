var express = require("express");
const router = express.Router();
const sController = require('../controllers/studentController');

router.post('/login',sController.stLoginPost);
router.get('/login',sController.sLoginGet);

module.exports = router;
