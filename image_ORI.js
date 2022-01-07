let start = document.getElementById("start");
        let stop = document.getElementById("stop");
        var canvas = document.getElementById("canvasInput");
        var canvas1 = document.getElementById("canvasOutput");

        let receivedMediaStream = null;


        window.addEventListener('click', function(event) {
            var constraints = {
                audio: false,
                video: true
            };

            if (event.target.id == "start") {
                start.hidden = true;
                stop.hidden = false;
                canvas.hidden = false;

                var constraints = {
                    audio: false,
                    video: true
                };

                //get access to open webcam
                navigator.mediaDevices.getUserMedia(constraints)
                    .then((mediaStream) => {
                        var video = document.querySelector('video');
                        video.srcObject = mediaStream;
                        receivedMediaStream = mediaStream;

                        video.onloadedmetadata = function loop(e) {
                            video.play();
                            if (video.play) {
                                canvas.width = 600;
                                canvas.height = 480;
                                var ctx = canvas.getContext('2d');
                                var ctx2 = canvas1.getContext('2d');
                                ctx.drawImage(video, 0, 0);
                                ctx2.drawImage(video, 0, 0, 198, 239, 0, 0, 198, 239);
                                ctx2.drawImage(video, 200, 0, 198, 239, 200, 0, 198, 239);
                                ctx2.drawImage(video, 400, 0, 198, 239, 402, 0, 198, 239);
                                ctx2.drawImage(video, 0, 240, 198, 239, 0, 240, 198, 239);
                                ctx2.drawImage(video, 200, 240, 198, 239, 200, 240, 198, 239);
                                ctx2.drawImage(video, 400, 240, 198, 239, 402, 240, 198, 239);
                                if (video.play) {
                                    setTimeout(loop, 1000 / 30); // drawing at 30fps 
                                } else {
                                    ctx.clearRect(0, 0, 600, 480);
                                    ctx2.clearRect(0, 0, 600, 480);
                                }
                            }
                        };
                    })
                    .catch((err) => {
                        console.log(err.name + ": " + err.message);
                    }); // always check for errors at the end.
            } else if (event.target.id == "stop") {
                start.hidden = false;
                stop.hidden = true;
                canvas.hidden = false;
                receivedMediaStream.getTracks().forEach(mediaTrack => {
                    mediaTrack.stop();
                });
            }
        })