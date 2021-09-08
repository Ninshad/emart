const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const { validateRequest, isRequestValidated, validateRequestSignin, isRequestValidatedSignin } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup',validateRequest, isRequestValidated,signup);
router.post('/admin/signin', validateRequestSignin, isRequestValidatedSignin ,signin);



module.exports = router;