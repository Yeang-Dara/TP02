    var canvas = document.getElementById('viewport');
    var video = document.createElement('video');
    var button = document.getElementById("button");
    video.autoplay = true
    //used to opened webcame in computer
    navigator.mediaDevices.getUserMedia({audio: false,video: true})
    .then((stream)=> { //used stream to  import in video surObject
        video.srcObject = stream

    }).catch(err => { // used to alert while we're using webcame on camera
       console.log('navigator.mediaDevices.getUserMedia error: ',err.message,err.name);
    })

    function onclickToReder() {// click it will reader function inside
        (function loop() { // used this function loop to run agian and agian untile end 
            canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);
            setTimeout(loop,1000/30);
        })();
    }
    button.addEventListener("click", function(){
        if(video.paused){
          video.play();
          button.innerHTML = "Pause";
        } else {
                video.pause();          
                button.innerHTML = "Play";
                
        }
    });