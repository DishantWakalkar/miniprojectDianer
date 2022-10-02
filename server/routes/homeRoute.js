const express = require('express');
const router = express.Router();
const gradesController = require("../controller/gradesController");
const submissionController = require("../controller/submissionController");
const coursecategoriesController = require("../controller/coursecategoriesController");
// const Controller = require("../controller/submissionController");
// const Controller = require("../controller/submissionController");

router.get('/getGrades', gradesController.get);
router.get('/getsubmission', submissionController.get);
router.get('/getcoursecategories', coursecategoriesController.get);
module.exports = router;