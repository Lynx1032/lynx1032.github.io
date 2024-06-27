function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").innerHTML = timeString;
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

  if ((viewportHeight <= 2160) && (viewportHeight > 1440) && (viewportHeight < viewportWidth)) {
    var textTimeElement = document.getElementById("time");
    textTimeElement.style.fontSize = "6vw";
    textTimeElement.style.textAlign = "right";

    var textDateElement = document.getElementById("date");
    textDateElement.style.fontSize = "4vw";
    textDateElement.style.textAlign = "right";
  } else 
  
  if ((viewportHeight <= 1440) && (viewportHeight > 1080) && (viewportHeight < viewportWidth)) {
    var textTimeElement = document.getElementById("time");
    textTimeElement.style.fontSize = "5vw";
    textTimeElement.style.textAlign = "right";

    var textDateElement = document.getElementById("date");
    textDateElement.style.fontSize = "3vw";
    textDateElement.style.textAlign = "right";
  } else

  if ((viewportHeight <= 1080) && (viewportHeight < viewportWidth)) {
    var textTimeElement = document.getElementById("time");
    textTimeElement.style.fontSize = "4vw";
    textTimeElement.style.textAlign = "right";

    var textDateElement = document.getElementById("date");
    textDateElement.style.fontSize = "2vw";
    textDateElement.style.textAlign = "right";
  } else 

  if (viewportHeight >= viewportWidth) {
    var timeDateContainerElement = document.querySelector('.clock-container');
    //timeDateContainerElement.style.bottom = "50%";
    timeDateContainerElement.style.left = "50%";
    timeDateContainerElement.style.transform = 'translate(-50%, -0%)';
    //timeDateContainerElement.style.justifyContent = "center";
    //timeDateContainerElement.style.alignItems = "center";

    var textTimeElement = document.getElementById("time");
    textTimeElement.style.fontSize = "7vw";
    textTimeElement.style.textAlign = "center";
    var textDateElement = document.getElementById("date");
    textDateElement.style.fontSize = "4vw";
    textDateElement.style.textAlign = "center";
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
      "2730071537.mp4"
      // Add more video as needed
    ];
  }

  var randomIndex = Math.floor(Math.random() * videoFiles.length);
  var randomVideoFiles = videoFiles[randomIndex];

  var videoPaths = videoFolder + randomVideoFiles;
  videoBackground.src = videoPaths;
}

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);
loadRandomVideo();
adjustTextSize();