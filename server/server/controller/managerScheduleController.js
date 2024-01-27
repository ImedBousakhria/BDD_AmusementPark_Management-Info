const mysql = require('mysql');
require('dotenv').config();

const { pool } = require('../../models/db'); // Adjust to your database setup

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

// Add new event
exports.createEvent = (req, res) => {
  const { event_name, description, end_event_date, start_event_date } = req.body;

  pool.query(
    'INSERT INTO event SET team_name = ?, description = ?, end_event_date = ?, start_event_date = ?',
    [event_name, description, end_event_date, start_event_date],
    (err, rows) => {
      if (!err) {
        res.status(201).json({ success: true, message: 'Event added successfully.' });
      } else {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error adding event.' });
      }
      console.log('The data from event table:\n', rows);
    }
  );
};

// Delete event
exports.deleteEvent = (req, res) => {
  pool.query('DELETE FROM event WHERE id = ?', [req.params.id], (err, result) => {
    if (!err) {
      console.log(`Event with id ${req.params.id} deleted successfully.`);
      res.status(204).json(); // No content, successful deletion
    } else {
      console.error('Error deleting event:', err);
      res.status(500).json({ success: false, message: 'Error deleting event.' });
    }
  });
};

// Add task
exports.createTask = (req, res) => {
  const { task_name, ending_time, starting_time, id_schedule, id_task } = req.body;

  pool.query(
    'INSERT INTO task SET task_name = ?, ending_time = ?, id_schedule = ?, starting_time = ?, id_task = ?',
    [task_name, ending_time, id_schedule, starting_time, id_task],
    (err, rows) => {
      if (!err) {
        res.status(201).json({ success: true, message: 'Task added successfully.' });
      } else {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error adding task.' });
      }
      console.log('The data from task table:\n', rows);
    }
  );
};

   