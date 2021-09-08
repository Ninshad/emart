const express = require('express');
const { signup, signin, requireSignin } = require('../controller/auth');
const router = express.Router();
const { validateRequest, isRequestValidated, validateRequestSignin, isRequestValidatedSignin } = require('../validators/auth');


router.post('/signup',validateRequest, isRequestValidated, signup);
router.post('/signin',validateRequestSignin, isRequestValidatedSignin ,signin);

// router.post('/profile',requireSignin,(req,res) => {
//     res.status(200).json({message:'profile'})
// })


module.exports = router;