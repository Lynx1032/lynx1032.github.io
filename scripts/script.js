function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  //var seconds = currentTime.getSeconds();
  var milisec = currentTime.getMilliseconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  //seconds = (seconds < 10 ? "0" : "") + seconds;
  
  if (milisec <= 500) {
    document.getElementById("time").innerHTML = hours + ":" + minutes;
  } else {
    document.getElementById("time").innerHTML = hours + " " + minutes;
  } 
}

function updateDate() {
  var currentTime = new Date();
  var day = currentTime.getDate();
  var month = currentTime.getMonth() + 1; // Adding 1 to match JavaScript's month indexing
  var year = currentTime.getFullYear();

  day = (day < 10 ? "0" : "") + day;
  month = (month < 10 ? "0" : "") + month;

  var dateString = day + "-" + month + "-" + year;
  document.getElementById("date").innerHTML = dateString;
}

function adjustTextSize() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
  var timeElement = document.getElementById("time");
  var dateElement = document.getElementById("date");

  if ((viewportHeight <= 2160) && (viewportHeight > 1440) && (viewportHeight < viewportWidth)) {
    timeElement.style.fontSize = "6vw";
    timeElement.style.textAlign = "center";

    dateElement.style.fontSize = "4vw";
    dateElement.style.textAlign = "center";
  } else 
  
  if ((viewportHeight <= 1440) && (viewportHeight > 1080) && (viewportHeight < viewportWidth)) {
    timeElement.style.fontSize = "5vw";
    timeElement.style.textAlign = "center";

    dateElement.style.fontSize = "3vw";
    dateElement.style.textAlign = "center";
  } else

  if ((viewportHeight <= 1080) && (viewportHeight < viewportWidth)) {
    timeElement.style.fontSize = "4vw";
    timeElement.style.textAlign = "center";

    dateElement.style.fontSize = "2vw";
    dateElement.style.textAlign = "center";
  } else 

  if (viewportHeight >= viewportWidth) {
    var timeDateContainerElement = document.querySelector('.clock-container');
    //timeDateContainerElement.style.bottom = "50%";
    timeDateContainerElement.style.left = "50%";
    timeDateContainerElement.style.transform = 'translate(-50%, -0%)';
    //timeDateContainerElement.style.justifyContent = "center";
    //timeDateContainerElement.style.alignItems = "center";

    timeElement.style.fontSize = "7vw";
    timeElement.style.textAlign = "center";

    dateElement.style.fontSize = "4vw";
    dateElement.style.textAlign = "center";
  }
}

function loadRandomVideo() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (viewportWidth > viewportHeight) {
    var videoBackground = document.getElementById("video-background");
    var videoFolder = "./background_video/";
    var videoFiles = [
      "3037654853.mp4",
      "3049184066.mp4",
      "3231081497.mp4",
      "3238678030.mp4",
      "3242897185.mp4",
      "3252186628.mp4",
      "3265233571.mp4",
      "3269475921.mp4",
      "3271047302.mp4",
      "3271523338.mp4",
      "3272404410.mp4",
      "3274133316.mp4"
      // Add more video as needed
    ];
  } else {
    var videoBackground = document.getElementById("video-background");
    var videoFolder = "./background_video_portrait/";
    var videoFiles = [
      "1990772497.mp4",
      "2383824380.mp4",
      "2712114224.mp4",
      "2730071537.mp4",
      "2811117418.mp4",
      "2867637516.mp4"
      // Add more video as needed
    ];
  }

  var randomIndex = Math.floor(Math.random() * videoFiles.length);
  var randomVideoFiles = videoFiles[randomIndex];

  var videoPaths = videoFolder + randomVideoFiles;
  videoBackground.src = videoPaths;
}

setInterval(updateTime, 50);
setInterval(updateDate, 50);
loadRandomVideo();
adjustTextSize();