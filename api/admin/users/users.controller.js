const router = require('express').Router();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const schema = require('./users.model');

/************* Setup middleware **********/
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


/***** Add users *****/
router.post('/addUser', [
    //check if field is not empty
    check('name').not().isEmpty().trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('password').not().isEmpty().trim().escape(),
    check('status').not().isEmpty().trim().escape(),
    check('type').not().isEmpty().trim().escape(),
], (req, res) => {
    /*** check validation result***/
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: 422,
            message: 'Validation error',
            errors: errors.array()
        })
    }

    schema.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        user_type: req.body.type,
        is_active: req.body.status,
    }, (error, result) => {
        if (error) {
            return res.json({
                status: 500,
                message: 'Failed to create user',
                error: error
            })
        }

        return res.json({
            status: 200,
            message: 'User created successfully',
            result: result,
        })
    })
});

/***********  Find user by email and password  *************/
router.post('/findUserByEmailPassword', [
    check('password').not().isEmpty().trim().escape(),
    check('email').isEmail().normalizeEmail()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: 422,
            message: 'Validation error',
            errors: errors.array()
        })
    }

    schema.findOne({ email: req.body.email, password: req.body.password }, (error, result) => {
        if (error) {
            return res.json({
                status: 500,
                message: 'Finding user failed ...',
            })
        }

        if (result) {
            /*** match password ***/
            return res.json({
                status: 200,
                message: 'User exist ...',
                result: result,
            })

        } else {
            return res.json({
                status: 201,
                message: 'User not found ',
            })
        }

    })

})


/************* Exporting module to app.js *************/
module.exports = router;