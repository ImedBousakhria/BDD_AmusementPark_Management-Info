const mysql = require('mysql');
const { pool } = require('../../models/db');
require('dotenv').config();

// Connection pool
const connectionPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Connect to the database
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id', connection.threadId);
    connection.release();
});

// Add new game
exports.createGame = (req, res) => {
    const { name, description, id_zone } = req.body;

    // The connection
    connectionPool.query(
        'INSERT INTO game SET name = ?, description = ?, id_zone = ?',
        [name, description, id_zone],
        (err, rows) => {
            if (!err) {
                res.render('add-game', { alert: 'Game added successfully.' });
            } else {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            console.log('The data from game table: \n', rows);
        }
    );
};

// Delete game
exports.deleteGame = (req, res) => {
    // User connection
    connectionPool.query('DELETE FROM game WHERE id_game = ?', [req.params.id], (err, result) => {
        if (!err) {
            console.log(`Game with id ${req.params.id} deleted successfully`);
            res.redirect('/');
        } else {
            console.error('Error deleting game:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};

// View staff
exports.view = (req, res) => {
    // User the connection
    connectionPool.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
            let removedUser = req.query.removed;
            res.render('view', { rows, removedUser });
        } else {
            console.log(err);
        }
        console.log('The data from staff table: \n', rows);
    });
};

// Add new staff
exports.createStaff = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;

    // User the connection
    connectionPool.query(
        'INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?',
        [first_name, last_name, email, phone, comments],
        (err, rows) => {
            if (!err) {
                res.render('add-staff', { alert: 'Staff added successfully.' });
            } else {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            console.log('The data from staff table: \n', rows);
        }
    );
    res.send('Create staff route works!');
};

// Edit staff
exports.edit = (req, res) => {
    // Use the connection
    connectionPool.query('SELECT * FROM staff WHERE ID = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-staff', { rows });
        } else {
            console.log(err);
        }
        console.log('The data from staff table: \n', rows);
    });
};

// Update staff
exports.update = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;

    // Use the connection
    connectionPool.query(
        'UPDATE staff SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?',
        [first_name, last_name, email, phone, comments, req.params.id],
        (err, rows) => {
            if (!err) {
                // Use the connection
                connectionPool.query('SELECT * FROM staff WHERE id = ?', [req.params.id], (err, rows) => {
                    // When done with the connection, release it
                    if (!err) {
                        res.render('edit-staff', { rows, alert: `${first_name} staff updated successfully!` });
                    } else {
                        console.log(err);
                    }
                    console.log('The data from staff table: \n', rows);
                });
            } else {
                console.log(err);
                res.status(500).send('Internal Server Error');
            }
            console.log('The data from staff table: \n', rows);
        }
    );
};

// Delete staff
exports.deleteStaff = (req, res) => {
    // Use connection
    connectionPool.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, result) => {
        if (!err) {
            console.log(`Staff with id ${req.params.id} deleted successfully`);
            res.redirect('/');
        } else {
            console.error('Error deleting staff:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};

// View Users
exports.viewall = (req, res) => {
    // Use the connection
    connectionPool.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('view-user', { rows });
        } else {
            console.log(err);
        }
        console.log('The data from user table: \n', rows);
    });
};

// Add new stand
exports.createStand = (req, res) => {
    const { stand_name, description, stand_type, stand_zone } = req.body;

    // The connection
    connectionPool.query(
        'INSERT INTO stand SET stand_name = ?, description = ?, id_stand = ?, stand_zone = ?, stand_type = ?',
        [stand_name, description, stand_zone, stand_type],
        (err, rows) => {
            if (!err) {
                res.render('add-stand', { alert: 'Stand added successfully.' });
            } else {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            console.log('The data from stand table: \n', rows);
        }
    );
};

// Delete stand
exports.deleteStand = (req, res) => {
    // Use connection
    connectionPool.query('DELETE FROM team WHERE id = ?', [req.params.id], (err, result) => {
        if (!err) {
            console.log(`Stand with id ${req.params.id} deleted successfully`);
            res.redirect('/');
        } else {
            console.error('Error deleting team:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};

// Add new team
exports.createTeam = (req, res) => {
    const { team_name, description, id_task, id_staff } = req.body;

    // Use the connection
    connectionPool.query(
        'INSERT INTO team SET team_name = ?, description = ?, id_staff = ?, id_task = ?',
        [team_name, description, id_staff, id_task],
        (err, rows) => {
            if (!err) {
                res.render('add-team', { alert: 'Team added successfully.' });
            } else {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
            console.log('The data from team table: \n', rows);
        }
    );
};

// Delete team
exports.deleteTeam = (req, res) => {
    // Use connection
    connectionPool.query('DELETE FROM team WHERE id = ?', [req.params.id], (err, result) => {
        if (!err) {
            console.log(`Team with id ${req.params.id} deleted successfully`);
            res.redirect('/');
        } else {
            console.error('Error deleting team:', err);
            res.status(500).send('Internal Server Error');
        }
    });
};

// Update team
exports.updateTeam = (req, res) => {
    const { team_name, description, id_team, id_staff } = req.body;

    // Assuming you have a database connection (replace this with your actual database logic)
    connectionPool.query(
        'UPDATE teams SET id_staff = ? WHERE id_team = ?',
        [id_staff, id_team],
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

// Add new zone
exports.createZone = (req, res) => {
    const { zone_name } = req.body;

    // Use the connection
    connectionPool.query('INSERT INTO zone SET zone_name = ?', [zone_name], (err, rows) => {
        if (!err) {
            res.render('add-zone', { alert: 'Zone added successfully.' });
        } else {
            console.error(err);
            res.status(500).send('Internal Server Error');
        }
        console.log('The data from zone table: \n', rows);
    });
};

// Edit zone
exports.editZone = (req, res) => {
    // Use the connection
    connectionPool.query('SELECT * FROM zone WHERE id_zone = ?', [req.params.id], (err, rows) => {
        if (!err) {
            res.render('edit-zone', { rows });
        } else {
            console.log(err);
        }
        console.log('The data from zone table: \n', rows);
    });
};

   //update zone 
   exports.updateZone = (req, res) =>{
    const { zone_name  }= req.body;
    // user the connection 
    connection.query(
        'UPDATE zone SET id_zone = ?, zone_name = ? WHERE id_zone = ?', 
    [ zone_name  ,id_zone, req.params.id], 
    (err, rows) =>
    { 
        if (!err){
            // user the connection
            connection.query('SELECT* FROM zone WHERE id_zone = ?',
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
exports.deleteZone = (req , res) => {
// user connection
connection.query('DELETE FROM zone WHERE id_zone = ?' , [req.params.id], (err, result)=>{
    if(!err){
        console.log('user with id ${req.params.id} deleted seccessfully');
        res.redirect('/');
        }else{
            console.error('Error deleting user:' , err);
    }
});
}


