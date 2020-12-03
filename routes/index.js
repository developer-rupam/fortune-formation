const router = require('express').Router()
const adminUserController = require('../api/admin/users/users.controller')
const adminServiceController = require('../api/admin/services/services.controller')

router.use('/admin/users/',adminUserController);
router.use('/admin/services/',adminServiceController);



module.exports = router