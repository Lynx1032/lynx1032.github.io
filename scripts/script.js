function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ms = now.getMilliseconds();
    const timeStr = ms <= 500 ? `${hours}:${minutes}` : `${hours} ${minutes}`;
    const timeElem = document.getElementById("time");
    if (timeElem) timeElem.innerHTML = timeStr;
}

function updateDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();
    const dateStr = `${day}-${month}-${year}`;
    const dateElem = document.getElementById("date");
    if (dateElem) dateElem.innerHTML = dateStr;
}

function adjustTextSize() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;
    const timeElem = document.getElementById("time");
    const dateElem = document.getElementById("date");
    const container = document.querySelector(".clock-container");

    if (!timeElem || !dateElem) return;

    if (height <= 2160 && height > 1440 && height < width) {
        timeElem.style.fontSize = "6vw";
        dateElem.style.fontSize = "4vw";
    } else if (height <= 1440 && height > 1080 && height < width) {
        timeElem.style.fontSize = "5vw";
        dateElem.style.fontSize = "3vw";
    } else if (height <= 1080 && height < width) {
        timeElem.style.fontSize = "4vw";
        dateElem.style.fontSize = "2vw";
    } else if (width <= height && container) {
        container.style.left = "50%";
        container.style.transform = "translate(-50%, -0%)";
        timeElem.style.fontSize = "7vw";
        dateElem.style.fontSize = "4vw";
    }
    timeElem.style.textAlign = "center";
    dateElem.style.textAlign = "center";
}

async function loadRandomVideo() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight;
    const videoElem = document.getElementById("video-background");
    if (!videoElem) return;

    let videoPath, listKey;
    if (height < width) {
        videoPath = "./background_video/";
        listKey = "landscape";
    } else {
        videoPath = "./background_video_portrait/";
        listKey = "portrait";
    }

    try {
        const response = await fetch("./scripts/videos.json");
        const data = await response.json();
        const videoList = data[listKey];
        if (!Array.isArray(videoList) || videoList.length === 0) return;
        const randomIndex = Math.floor(Math.random() * videoList.length);
        videoElem.src = videoPath + videoList[randomIndex];
    } catch (e) {
        console.error("Failed to load video list", e);
    }
}

setInterval(updateTime, 250);
setInterval(updateDate, 250);
window.addEventListener("resize", adjustTextSize);

loadRandomVideo();
adjustTextSize();
