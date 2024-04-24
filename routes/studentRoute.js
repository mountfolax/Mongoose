const express = require('express')

const router = express.Router()
const {getAllStudent , createStudent , getSingleStudent , updateStudent , deleteStudent} = require('../controller/studentControllers')

router.route('/students').get(getAllStudent).post(createStudent)
router.route('/students/:id').get(getSingleStudent).put(updateStudent).delete(deleteStudent)

module.exports = router