// The base server development code with express and a cross origin permission status
'use strict'
const express  = require('express');
const mysql = require('mysql')
const app = express();
const cors = require('cors')
app.use(cors({origin:"*"}));

// Port to be listen and use by the program server to serve the clients/requests

const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log(`Listening on port ${port}..`));

// MYSQL local connection credentials

const mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'check_hms',
    port: 3308,
    multipleStatements: true
  });

// MYSQL connection status

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Database Connection Established Successfully');
    else
    console.log('Database Connection Failed!\n' + JSON.stringify(err,undefined,2));
});

// Importation of the SOCKET.IO  real-time bidirectional event-based communication module

const io = require('socket.io')(server); 

// io.connection...Listen to any connection made to this app server 
// and check the emitted event to perform the specific operation its requires to do

io.on("connection", (socket) => { 
    socket.on('view login notification',(data)=>{ // listen to the specified incoming event
        io.emit('login notification sent',{ // emit an event to all connected sockets
            message: 'New login alert!',
            identity: [data.firstname + ' ' + data.lastname]
        })
    })

    socket.on('view customize notification',(data)=>{ 
        let SQL_QUERY = `SELECT positions.position_name, users.position_id FROM users JOIN positions ON positions.id = users.position_id WHERE users.id = ${data.id}`
        mysqlConnection.query(SQL_QUERY,(err, responseRowData)=>{
            if (!err) {
                io.emit('customize notification sent',{
                    message: 'New component view alert!',
                    identity: responseRowData
                })
            } else{
                console.log(err)
            }
        })
    });

    socket.on('view all notifications',(data)=>{
        io.emit('all notifications sent',{
            message: 'New notification',
            datas: data
        })
    });

})