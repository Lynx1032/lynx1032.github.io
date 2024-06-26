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

function getRandomVideo(files) {
  var randomIndex = Math.floor(Math.random() * files.length);
  return files[randomIndex];
}

function loadRandomVideo() {
  var videoBackground = document.getElementById("video-background");
  var videoFolder = "./background_video/"; // Replace with your video folder path
  var videoExtensions = ["mp4", "webm"]; // Supported video extensions

  fetch(videoFolder)
    .then(response => response.text())
    .then(data => {
      var parser = new DOMParser();
      var html = parser.parseFromString(data, "text/html");
      var links = Array.from(html.querySelectorAll("a"));

      var videoFiles = links
        .map(link => link.getAttribute("href"))
        .filter(href => videoExtensions.some(ext => href.endsWith(ext)));

      var randomVideo = getRandomVideo(videoFiles);
      videoBackground.src = videoFolder + randomVideo;
    })
    .catch(error => {
      console.error("Error fetching video folder:", error);
    });
}

loadRandomVideo();

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);