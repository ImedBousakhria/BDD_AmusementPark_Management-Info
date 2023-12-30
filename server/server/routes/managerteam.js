const express = require('express');
const router = express.Router();
const userController = require('../Controller/managerTeam');

// Routes

router.get('/', managerTeam.view);
router.get('/addstaff', managerTeam.form);
router.post('/addstaff', managerTeam.create);
router.get('/editstaff/:id', managerTeam.edit);
router.post('/editstaff/:id', managerTeam.update);
router.get('/viewstaff/:id', managerTeam.viewall);
router.delete('/:id',managerTeam.delete);


/////////////////////////////////////////////////////////////
router.post('/addgame', managerTeam.create);
router.delete('/:id_game',managerTeam.delete);

///////////////////////////////////////////////////////////

router.post('/addstand', managerTeam.create);
router.delete('/:id_stand',managerTeam.delete);


//////////////////////////////////////////////////////////

router.post('/addteam', managerTeam.create);
router.delete('/:id_team',managerTeam.delete);
router.post('/editteam/:id', managerTeam.update);

////////////////////////////////////////////////////////////////

router.post('/addzone', managerTeam.add);
router.delete('/:id_zone',managerTeam.delete);





  
module.exports = router;