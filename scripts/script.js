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

function loadRandomVideo() {
  var videoBackground = document.getElementById("video-background");
  var videoFolder = "./background_video/";
  var videoFiles = [
    "3037654853.mp4",
    "3049184066.mp4",
    "3231081497.mp4",
    "3238678030.mp4",
    "3242897185.mp4",
    "3265233571.mp4"
    // Add more video as needed
  ];
  var randomIndex = Math.floor(Math.random() * videoFiles.length);
  var randomVideoFiles = videoFiles[randomIndex];

  var videoPaths = videoFolder + randomVideoFiles;
  videoBackground.src = videoPaths;
}

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);
loadRandomVideo();