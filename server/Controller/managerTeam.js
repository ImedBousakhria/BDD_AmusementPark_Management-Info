const mysql = require('mysql');

require('dotenv').config();


//connection pool

let connection = mysql.createConnection({
    host: process.env.DB_HOST ,
    user : process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// connect to database

connection.connect((err) =>{
if (err){
    console.error('Erroro connecting to my sql:' +err.stack)
    return;
}
console.log('Connected to my sql as id' + connection.threadId)

});

//////////////////////////////////////////////////////
// add new game 
exports.create = (req , res) =>{
  const { name , descrpition , id_zone } =
  req.body;
  let searchTerm = req.body.search;

  //  the connection
  connection.query(
      'INSERT INTO game SET name = ? , descrpition = ? , id_zone = ?' 
       [name  , descrpition, id_zone , picture_game],
        (err,rows)=>{
      if (!err){
          res.render('add-game', {alert: 'game added seccessfully.'});
      } else {
          console.log(err);
      }
      console.log('the data from game table : \n' , rows);
  });
 } 


 // delete game 
exports.delete = (req , res) => {
// user connection
connection.query('DELETE FROM game WHERE id_game = ?' , [req.params.id], (err, result)=>{
  if(!err){
      console.log('game with id_game ${req.params.id} deleted seccessfully');
      res.redirect('/');
      }else{
          console.error('Error deleting game:' , err);
      }
});
}
///////////////////////////////////////////////////////////
// views staff
exports.view = (req, res) =>
{
    // User the connection
    connection.query('SELECT * FROM user WHERE status = "active"',
    (err, rows) => {
        //when done with the connection , release it
        if (!err){
            let removedUser = req.query.removed;
            res.render('home', {rows,removedUser});
        } else {
            console.log(err);
        }
        console.log('The data from staff table: \n', rows);
        });
    }

// find staff by search
// this exports a function that will be uses when this module is required in another file.
exports.find = (req, res) => {
    // extract the search term from the request body
    let searchTerm = req.body.search;
    // User connection
    // execute a sql query to select rows from the 'user' table where the first_name or last name is like the search term
    connection.query('SELECT * FROM staff WHERE first_name Like ? OR last_name LIKE ?' , ['%' + searchTerm + '%' , '%' + searchTerm + '%' ] , (err, rows) =>{
        //check if there is no error in executing the query.
        if (!err) {
            //render the 'home' views (assuming this is a template engine like ejs) and pass the retrieved rows.
            res.render('home' , {rows});
            }else {
                // log the error to the console if there is an error .
                console.log(err);
        }

        // log the data from the 'user' table to the console.
        console.log('the data from user table : \n' , rows);
    });
    // this exports another function that will be used when this module is required in another file
    exports.form = (req, res)=>{
        res.render('add-staff');
    }
}

// add new staff 
   exports.create = (req , res) =>{
    const { first_name , last_name , email , phone , comments } =
    req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query(
        'INSERT INTO user SET first_name = ? ,last_name = ? , email = ?, phone = ?, comments= ?' 
         [first_name , last_name , email, phone , comments],
          (err,rows)=>{
        if (!err){
            res.render('add-staff', {alert: 'staff added seccessfully.'});
        } else {
            console.log(err);
        }
        console.log('the data from staff table : \n' , rows);
    });
   } 

   // Edit staff

   exports.edit = (req , res) =>{
    //user the connection
    connection.query('SELECT * FROM staff WHERE ID = ?',
    [req.params.id] , (err,rows) =>{
        if(!err){
            res.render('edit-staff', {rows});
            } else {
                console.log(err);
            }
            console.log('the data from staff table : \n', rows)
    });
   }

   //update staff 
   exports.update = (req, res) =>{
    const { first_name , last_name , email , phone , comments } = req.body;
    // user the connection 
    connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?', 
    [first_name, last_name, email, phone, comments, req.params.id], (err, rows) =>
    { 
        if (!err){
            // user the connection
            connection.query('SELECT* FROM staff WHERE id = ?',
            [req.params.id], (err,rows) => {
                // when done with the connection , release it 

                if (!err){
                    res.render('edit-staff', { rows, alert:'${first_name} staff updated successfully!'}) ;
                
                }else{
                    console.log(err);
        }
        console.log('the data from staff table : \n', rows);
        });
    }else{
        console.log(err);
        
    }
    console.log('the data from staff table: \n', rows );
});
}


// delete staff 
exports.delete = (req , res) => {
// user connection
connection.query('DELETE FROM user WHERE id = ?' , [req.params.id], (err, result)=>{
    if(!err){
        console.log('staff with id ${req.params.id} deleted seccessfully');
        res.redirect('/');
        }else{
            console.error('Error deleting staff:' , err);
    }
});
}
// Hide a record 
app.post('/updatestaff/:id', (req,res)=>{


connection.query('UPDATE staff SET status =? WHERE id =?',
['removed', req.params.id] , (err,rows)=> {
    if(!err){
        let removedstaff = encodeURIComponent('staff seccessufully removed');
        res.redirect('/?removed=' + removedUser);
        } else {
            console.log(err);
        }
        console.log('the data from beer table are : \n' , rows);
        });
    });

// View Users
exports.viewall = (req, res) => {

    // User the connection
    connection.query('SELECT * FROM user WHERE id = ?',
     [req.params.id], (err, rows) => {
      if (!err) {
        res.render('view-user', { rows });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
}





///////////////////////////////////////////////////////////////////////

// add new stand  
exports.create = (req , res) =>{
    const { stand_name , descrpition , stand_type , stand_zone , id_stand } =
    req.body;
    let searchTerm = req.body.search;

    //  the connection
    connection.query(
        'INSERT INTO stand SET stand_name = ? , descrpition = ? , id_stand = ? , stand_zone = ? , stand_type = ?'  
         [stand_name  , descrpition, id_stand , stand_zone , stand_type],
          (err,rows)=>{
        if (!err){
            res.render('add-stand', {alert: 'stand added seccessfully.'});
        } else {
            console.log(err);
        }
        console.log('the data from stand table : \n' , rows);
    });
   } 

  // delete stand 
  exports.delete = (req , res) => {
    // user connection
    connection.query('DELETE FROM team WHERE id = ?' , [req.params.id], (err, result)=>{
        if(!err){
            console.log('stand with id ${req.params.id} deleted seccessfully');
            res.redirect('/');
            }else{
                console.error('Error deleting team:' , err);
            }
    });
    }  

////////////////////////////////////////////////////////////////////////////


// add new team  
exports.create = (req , res) =>{
  const { team_name , descrpition , id_task , id_staff } =
  req.body;
  let searchTerm = req.body.search;

  // User the connection
  connection.query(
      'INSERT INTO team SET team_name = ? , descrpition = ? , id_staff = ?' 
       [team_name  , descrpition, id_staff , id_task],
        (err,rows)=>{
      if (!err){
          res.render('add-team', {alert: 'team added seccessfully.'});
      } else {
          console.log(err);
      }
      console.log('the data from team table : \n' , rows);
  });
 } 

// delete team 
exports.delete = (req , res) => {
  // user connection
  connection.query('DELETE FROM team WHERE id = ?' , [req.params.id], (err, result)=>{
      if(!err){
          console.log('team with id ${req.params.id} deleted seccessfully');
          res.redirect('/');
          }else{
              console.error('Error deleting team:' , err);
          }
  });
  }  
  
  
  exports.updateTeam = (req, res) => {
      const teamId = req.params.id;
      const { team_name, description , id_team , id_staff} = req.body;
    
      // Assuming you have a database connection (replace this with your actual database logic)
      connection.query(
        'UPDATE teams SET id_staff = ?,  WHERE id_team = ?',
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
exports.create = (req , res) =>{
    const  { zone_name  ,id_zone } =
    req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query(
        'INSERT INTO user SET  id_zone = ?,  zone_name= ?' 
         [ zone_name  ,id_zone ],
          (err,rows)=>{
        if (!err){
            res.render('add-zone', {alert: 'zone added seccessfully.'});
        } else {
            console.log(err);
        }
        console.log('the data from zone table : \n' , rows);
    });
   } 

// Edit zone

exports.edit = (req , res) =>{
    //user the connection
    connection.query('SELECT * FROM zone WHERE id_zone = ?',
    [req.params.id] , (err,rows) =>{
        if(!err){
            res.render('edit-zone', {rows});
            } else {
                console.log(err);
            }
            console.log('the data from zone table : \n', rows)
    });
   }


   //update zone 
   exports.update = (req, res) =>{
    const { zone_name  ,id_zone }= req.body;
    // user the connection 
    connection.query('UPDATE zone SET id_zone = ?, zone_name = ? WHERE id_zone = ?', 
    [ zone_name  ,id_zone, req.params.id], (err, rows) =>
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
exports.delete = (req , res) => {
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


