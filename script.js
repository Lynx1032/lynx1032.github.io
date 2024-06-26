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
  var videoFolder = "background_video/"; // Assuming "background_video" is in the same directory

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        var parser = new DOMParser();
        var doc = parser.parseFromString(response, "text/html");
        var links = Array.from(doc.querySelectorAll("a"));

        var videoFiles = links
          .map(function (link) {
            return link.getAttribute("href");
          })
          .filter(function (href) {
            return href.endsWith(".mp4") || href.endsWith(".webm");
          });

        var randomVideo = getRandomVideo(videoFiles);
        videoBackground.src = videoFolder + randomVideo;
      } else {
        console.error("Error fetching video files:", xhr.statusText);
      }
    }
  };

  xhr.open("GET", videoFolder, true);
  xhr.send();
}

loadRandomVideo();

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);