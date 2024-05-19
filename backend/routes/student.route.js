const express = require('express')
const routes = express.Router();
const {
    getStudents,
    addStudents,
    getStudent,
    updateStudents,
    deleteStudent,
} = require('../controllers/student.controller')




routes.route('/')
    .get(getStudents)
    .post( addStudents)
routes.route('/:id')
    .get( getStudent)
    .patch( updateStudents)
    .delete(deleteStudent)
//routes.put('/:id', replaceStudents);
module.exports = routes