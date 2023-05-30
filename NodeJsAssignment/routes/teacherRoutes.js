var express = require('express');
const router = express.Router();
const tController = require('../controllers/teacherController');

router.get('/login',tController.tLoginGet);
router.post('/login',tController.tLoginPost);
router.get('/delete/:id',tController.tDeleteGet);
router.get('/option',tController.tOptionGet);
router.get('/edit/:id',tController.tEditGet);
router.post('/edit/:id',tController.tEditPost);
router.get('/add',tController.tAddGet);
router.post('/add',tController.tAddPost);
router.get('/viewall',tController.tViewGet);


module.exports = router;
