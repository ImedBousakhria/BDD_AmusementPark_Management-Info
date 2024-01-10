const express = require('express');
const router = express.Router();
const managerTeam = require('../controller/managerTeam');


// Routes

router.get('/', managerTeam.view);
//router.get('/addstaff', managerTeam.form);
router.post('/addstaff', managerTeam.createStaff);
router.get('/editstaff/:id', managerTeam.edit);
router.post('/editstaff/:id', managerTeam.update);
router.get('/viewstaff/:id', managerTeam.viewall);
router.delete('/:id',managerTeam.deleteStaff);



/////////////////////////////////////////////////////////////
router.post('/addgame', managerTeam.createGame);
router.delete('/:id_game',managerTeam.deleteGame);

///////////////////////////////////////////////////////////

router.post('/addstand', managerTeam.createStand);
router.delete('/:id_stand',managerTeam.deleteStand);


//////////////////////////////////////////////////////////

router.post('/addteam', managerTeam.createTeam);
router.delete('/:id_team',managerTeam.deleteTeam);
router.post('/editteam/:id', managerTeam.update);

////////////////////////////////////////////////////////////////

router.post('/addzone', managerTeam.add);
router.delete('/:id_zone',managerTeam.deleteZone);
router.post('/editzone/:id', managerTeam.updateZone);
  
module.exports = router;