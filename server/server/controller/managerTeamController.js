const mysql = require('mysql');

const { pool } = require('../../models/db');

require('dotenv').config();

// Connection pool


// Connect to the database
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack)
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId)

    connection.release();
});

// Add new game
exports.createGame = (req, res) => {
    const { name, description, picturegame } = req.body;

    pool.query(
        'INSERT INTO game SET name = ?, description = ?, picturegame = ?',
        [name, description, picturegame],
        (err, result) => {
            if (!err) {
                res.status(201).json({ success: true, message: 'Game added successfully.' });
            } else {
                console.error(err);
                res.status(500).json({ success: false, message: 'Error adding game.' });
            }
            console.log('The data from game table:\n', result);
        }
    );
};

// Delete game
exports.deleteGame = (req, res) => {
    pool.query('DELETE FROM game WHERE id_game = ?', [req.params.id], (err, result) => {
        if (!err) {
            console.log(`Game with id_game ${req.params.id} deleted successfully.`);
            res.status(204).json(); // No content, successful deletion
        } else {
            console.error('Error deleting game:', err);
            res.status(500).json({ success: false, message: 'Error deleting game.' });
        }
    });
};

// View staff
exports.view = (req, res) => {
    pool.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
        if (!err) {
            let removedUser = req.query.removed;
            res.json({ success: true, data: { rows, removedUser } });
        } else {
            console.error(err);
            res.status(500).json({ success: false, message: 'Error fetching staff data.' });
        }
        console.log('The data from staff table: \n', rows);
    });
};

// Add new staff
exports.createStaff = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;

    pool.query(
        'INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?',
        [first_name, last_name, email, phone, comments],
        (err, result) => {
            if (!err) {
                res.status(201).json({ success: true, message: 'Staff added successfully.' });
            } else {
                console.error(err);
                res.status(500).json({ success: false, message: 'Error adding staff.' });
            }
            console.log('The data from staff table: \n', result);
        }
    );
};
   // Edit staff
exports.edit = (req, res) => {
    // Use the connection
    pool.query('SELECT * FROM staff WHERE ID = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.json({ success: true, data: { rows } });
        } else {
            console.error(err);
            res.status(500).json({ success: false, message: 'Error fetching staff data.' });
        }
        console.log('The data from staff table: \n', rows);
    });
};

 // Update staff
exports.update = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;

    // Use the connection
    pool.query(
        'UPDATE staff SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?',
        [first_name, last_name, email, phone, comments, req.params.id],
        (err, result) => {
            if (!err) {
                // Use the connection
                connection.query('SELECT * FROM staff WHERE id = ?', [req.params.id], (err, rows) => {
                    // When done with the connection, release it
                    if (!err) {
                        res.json({ success: true, data: { rows }, message: `${first_name} staff updated successfully!` });
                    } else {
                        console.error(err);
                        res.status(500).json({ success: false, message: 'Error fetching updated staff data.' });
                    }
                    console.log('The data from staff table: \n', rows);
                });
            } else {
                console.error(err);
                res.status(500).json({ success: false, message: 'Error updating staff.' });
            }
        }
    );
};

// Delete staff
exports.deleteStaff = (req, res) => {
    // Use the connection
    pool.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, result) => {
        if (!err) {
            res.json({ success: true, message: `Staff with id ${req.params.id} deleted successfully.` });
        } else {
            console.error('Error deleting staff:', err);
            res.status(500).json({ success: false, message: 'Error deleting staff.' });
        }
    });
};

// View Users
exports.viewall = (req, res) => {
    // Use the connection
    pool.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.json({ success: true, data: { rows } });
        } else {
            console.error(err);
            res.status(500).json({ success: false, message: 'Error fetching user data.' });
        }
        console.log('The data from user table: \n', rows);
    });
};




///////////////////////////////////////////////////////////////////////

// add new stand
exports.createStand = (req, res) => {
    const { stand_name, description, stand_type, stand_zone } = req.body;

    // Validate input data (add more validation if needed)

    // Use the connection
    pool.query(
        'INSERT INTO stand SET stand_name = ?, description = ?, stand_type = ?, stand_zone = ?',
        [stand_name, description, stand_type, stand_zone],
        (err, rows) => {
            if (!err) {
                res.json({ success: true, message: 'Stand added successfully', data: { rows } });
            } else {
                console.error(err);
                res.status(500).json({ success: false, message: 'Error adding stand' });
            }
        }
    );
};

// delete stand
exports.deleteStand = (req, res) => {
    // Use connection
    pool.query('DELETE FROM stand WHERE id = ?', [req.params.id], (err, result) => {
        if (!err) {
            console.log(`Stand with id ${req.params.id} deleted successfully`);
            res.redirect('/');
        } else {
            console.error('Error deleting stand:', err);
            res.status(500).json({ success: false, message: 'Error deleting stand' });
        }
    });
};
////////////////////////////////////////////////////////////////////////////


exports.createTeam = (req, res) => {
    const { team_name, descrpition } = req.body;
  
    // Use the connection
    pool.query(
      'INSERT INTO team SET team_name = ?, descrpition = ?',
      [team_name, descrpition],
      (err, result) => {
        if (!err) {
          res.json({ success: true, message: 'Team added successfully' });
        } else {
          console.log(err);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        console.log('The data from team table:\n', result);
      }
    );
  };

// delete team 
exports.deleteTeam = (req, res) => {
    // user connection
    pool.query('DELETE FROM team WHERE id = ?', [req.params.id], (err, result) => {
      if (!err) {
        console.log(`team with id ${req.params.id} deleted successfully`);
        res.redirect('/');
      } else {
        console.error('Error deleting team:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  };
  
  // i think i will delete this 
  exports.updateTeam = (req, res) => {
      const teamId = req.params.id;
      const { team_name, description , id_team , id_staff} = req.body;
    
      // Assuming you have a database connection (replace this with your actual database logic)
      pool.query(
        'UPDATE teams SET id_staff = ?,  WHERE id_team = ?',// we should another staff for example 
        [teamName, teamDescription, teamId],
        (err, result) => {
          if (!err) {
            res.json({ message: 'Team updated successfully', result });
          } else {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
          }
        }
      );
    };



//////////////////////////////////////////////////////////////////////////////////////////////////////////
// add new zone 
exports.createZone = (req, res) => {
    const { zone_name } = req.body;

    // Use the connection
    pool.query(
        'INSERT INTO zone SET zone_name = ?',
        [zone_name],
        (err, rows) => {
            if (!err) {
                res.json({ success: true, message: 'Zone added successfully.' });
            } else {
                console.log(err);
                res.status(500).json({ success: false, message: 'Internal Server Error' });
            }
            console.log('the data from zone table : \n', rows);
        }
    );
};

// Edit zone , to remove 

exports.edit = (req, res) => {
    //user the connection
    pool.query('SELECT * FROM zone WHERE id_zone = ?',
        [req.params.id], (err, rows) => {
            if (!err) {
                res.json({ success: true, data: rows });
            } else {
                console.log(err);
                res.status(500).json({ success: false, message: 'Internal Server Error' });
            }
            console.log('the data from zone table : \n', rows);
        });
};

   //update zone 
   exports.updateZone = (req, res) =>{
    const { zone_name  }= req.body;
    // user the connection 
    pool.query(
        'UPDATE zone SET id_zone = ?, zone_name = ? WHERE id_zone = ?', 
    [ zone_name  ,id_zone, req.params.id], 
    (err, rows) =>
    { 
        if (!err){
            // user the connection
            pool.query('SELECT* FROM zone WHERE id_zone = ?',
            [req.params.id], (err,rows) => {
                // when done with the connection , release it 

                if (!err){
                    res.render('edit-zone', { rows, alert:'${first_name} User updated successfully!'}) ;
                
                }else{
                    console.log(err);
        }
        console.log('the data from zone table : \n', rows);
        });
    }else{
        console.log(err);
        
    }
    console.log('the data from zone table: \n', rows );
});
}


// delete zone 
exports.deleteZone = (req, res) => {
    // user connection
    pool.query('DELETE FROM zone WHERE id_zone = ?', [req.params.id], (err, result) => {
        if (!err) {
            res.json({ success: true, message: `Zone with id ${req.params.id} deleted successfully` });
        } else {
            console.error('Error deleting zone:', err);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    });
};

