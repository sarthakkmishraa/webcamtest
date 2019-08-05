var canvas = document.getElementById('preview')
var context = canvas.getContext('2d')
var video = document.getElementById('video')
console.log('CAMERA')

const socket = io.connect('http://localhost:6000/')
//const socket = io.connect('http://06d3b22c.ngrok.io')

/*socket.on('image',(data)=>{
    console.log('HELLO IMAGE')
    console.log(data)
})*/

canvas.width = 800
canvas.height = 500

context.width = canvas.width
context.height = canvas.height

const Logger = (msg) =>{
    var logger = document.getElementById('logger')
    logger.text(msg)
}

const Loadcam = (stream) => {
    console.log(stream)
    //video.src = window.URL.createObjectURL(stream)

    video.srcObject = stream
    video.play() 

    Logger('camraraaarra????')
}

const Loadfail = ()=> {
    Logger('camara????')
}

const viewVideo = (video,context)=>{
    context.drawImage(video,0,0,context.width,context.height)

    socket.emit('stream',canvas.toDataURL('image/webp'))
}

navigator.getUserMedia = (navigator.getUserMedia || navigator.
    webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia)

if(navigator.getUserMedia){
    navigator.getUserMedia({video : true},Loadcam,Loadfail)
}

setInterval(()=>{
    viewVideo(video,context)
},10)