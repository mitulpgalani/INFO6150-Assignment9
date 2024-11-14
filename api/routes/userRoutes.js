const userController = require('../controllers/userController');
const {upload} = require('../services/userService');

const express = require('express');
const router = express.Router();


router.post('/create', userController.createUser);
router.put('/edit', userController.editUser);
router.delete('/delete', userController.deleteUser);
router.get('/getAll', userController.getAllUsers);
router.post('/login', userController.userLogin);
router.post('/uploadImage', upload.single('image'), userController.imageUpload);

module.exports = router;
