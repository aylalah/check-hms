'use strict'
const express  = require('express');
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors')
app.use(cors({origin:"*"}));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log(`Listening on port ${port}..`));

const io = require('socket.io')(server); 


io.on("connection", (socket) => {
    socket.on('view login notification',(data)=>{
        io.emit('login notification sent',{
            message: 'New login alert!',
            identity: [data.firstname + ' ' + data.lastname]
        })
    })
})