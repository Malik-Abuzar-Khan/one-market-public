const express = require('express');
const router = express.Router();
const { registrationController } = require('../../controllers/registration');


router.post('/', registrationController);

module.exports = router;
