const express = require('express');
const router = express.Router();
const managerTeamController = require('../controller/managerTeamController');

// Routes
router.get('/', managerTeamController.view);
router.post('/addstaff', managerTeamController.createStaff);
router.get('/editstaff/:id', managerTeamController.edit);
router.post('/editstaff/:id', managerTeamController.update);
router.get('/viewstaff/:id', managerTeamController.viewall);
router.delete('/:id', managerTeamController.deleteStaff);

router.post('/addGame', managerTeamController.createGame);
router.delete('/:id_game', managerTeamController.deleteGame);

router.post('/addstand', managerTeamController.createStand);
router.delete('/:id_stand', managerTeamController.deleteStand);

router.post('/addteam', managerTeamController.createTeam);
router.delete('/:id_team', managerTeamController.deleteTeam);
router.post('/editteam/:id', managerTeamController.updateTeam);

router.post('/addzone', managerTeamController.createZone);
router.delete('/:id_zone', managerTeamController.deleteZone);
router.post('/editzone/:id', managerTeamController.updateZone);

module.exports = router;