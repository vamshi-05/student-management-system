const express = require('express')
const routes = express.Router();
const {
    getStudents,
    addStudents,
    getStudent,
    updateStudents,
} = require('../controllers/student.controller')




routes.get('/', getStudents);
routes.post('/', addStudents)
routes.get('/:id', getStudent);
routes.patch('/:id', updateStudents);
//routes.put('/:id', replaceStudents);
module.exports = routes