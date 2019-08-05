const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const LOG = require('log')

var log = new LOG('debug')
var PORT = process.env.PORT || 6000
app.use(express.static(__dirname+'/public'))

server.listen(PORT,()=>{
    console.log('runninn on %s',PORT)
})

app.get('/',(req,res)=>{
    console.log('this is webcam GET')
    const name = req.query.name

    res.sendFile(__dirname+'/public/wcam.html')
})

app.get('/wview',(req,res)=>{
    console.log('this is wcamView GET')

    res.sendFile(__dirname+'/public/wcamview.html')
})

io.on('connection',(socket)=>{
    console.log('Connected')

    socket.on('stream',(image)=>{
        
        var daTa="working?"
        socket.broadcast.emit('stream',image,daTa)
    })
})