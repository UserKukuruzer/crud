const Router = require('express')
const router = new Router()
const userController = require('./controller')

router.route('/').post(userController.create)
router.route('/').get(userController.getAll)
router.route('/one').get(userController.getOne)
router.route('/').delete(userController.Delete)
router.route('/').put(userController.Update)


module.exports = router