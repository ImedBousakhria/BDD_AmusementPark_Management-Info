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


////////////////////////////////////////////////////////////////////////////////////////////////////////
// add new event 
exports.create = (req , res) =>{
    const { event_name , descrpition , end_event_date , start_event_date  } =
    req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query(
        'INSERT INTO team SET team_name = ? , descrpition = ? , end_event_date = ? , start_event_date = ?', 
         [event_name , descrpition , end_event_date , start_event_date],
          (err,rows)=>{
        if (!err){
            res.render('add-event', {alert: 'event added seccessfully.'});
        } else {
            console.log(err);
        }
        console.log('the data from event table : \n' , rows);
    });
   } 

  // delete event 
  exports.delete = (req , res) => {
    // user connection
    connection.query('DELETE FROM event WHERE id = ?' , [req.params.id], (err, result)=>{
        if(!err){
            console.log('event with id ${req.params.id} deleted seccessfully');
            res.redirect('/');
            }else{
                console.error('Error deleting event:' , err);
            }
    });
    }  
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// add task 

exports.create = (req , res) =>{
    const { task_name , ending_time  , starting_time } =
    req.body;
    let searchTerm = req.body.search;

    // User the connection
    connection.query(
        'INSERT INTO task SET task_name = ? ,ending_time = ? , id_task = ?, starting_time= ?' 
         [task_name , ending_time ,id_schedule , id_task , starting_time],
          (err,rows)=>{
        if (!err){
            res.render('add-task', {alert: 'task added seccessfully.'});
        } else {
            console.log(err);
        }
        console.log('the data from task table : \n' , rows);
    });
   } 


   ///////////////////////////////////////////////////////////


   