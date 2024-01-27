const express = require('express');
const router = express.Router();
const managerScheduleController = require('../controller/managerScheduleController');


router.post('/addevent', managerScheduleController.createEvent);
router.delete('/:id_event',managerScheduleController.deleteEvent);
router.post('/addtask', managerScheduleController.createTask);


module.exports = router;