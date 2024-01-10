const express = require('express');
const router = express.Router();
const managerSchedule = require('../controller/managerSchedule');


router.post('/addevent', managerSchedule.create);
router.delete('/:id_event',managerSchedule.delete);
router.post('/addtask', managerTeam.create);


module.exports = managerschedule;