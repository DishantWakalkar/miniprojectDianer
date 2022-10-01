const express = require('express');
const router = express.Router();
const gradesController = require("../controller/gradesController");


router.get('/getGrades', gradesController.get);
module.exports = router;