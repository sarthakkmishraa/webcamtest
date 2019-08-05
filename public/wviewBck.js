const socket = io.connect()
//const socket = io.connect('http://06d3b22c.ngrok.io')

socket.on('stream',(data,data2)=>{
    var canvas = document.getElementById('preview')
    console.log(data)
    console.log('!!')
    canvas.src=data

    document.getElementById('some').innerHTML=data2
})


