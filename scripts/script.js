function updateTime() {
    var e = new Date(),
        t = e.getHours(),
        n = e.getMinutes(),
        e = e.getMilliseconds(),
        t = (t < 10 ? "0" : "") + t,
        n = (n < 10 ? "0" : "") + n;
    document.getElementById("time").innerHTML = e <= 500 ? t + ":" + n : t + " " + n;
}
function updateDate() {
    var e = new Date(),
        t = e.getDate(),
        n = e.getMonth() + 1,
        t = (t < 10 ? "0" : "") + t + "-" + ((n < 10 ? "0" : "") + n) + "-" + e.getFullYear();
    document.getElementById("date").innerHTML = t;
}
function adjustTextSize() {
    var e = window.innerWidth || document.documentElement.clientWidth,
        t = window.innerHeight || document.documentElement.clientHeight,
        n = document.getElementById("time"),
        i = document.getElementById("date");
    t <= 2160 && 1440 < t && t < e
        ? ((n.style.fontSize = "6vw"), (n.style.textAlign = "center"), (i.style.fontSize = "4vw"), (i.style.textAlign = "center"))
        : t <= 1440 && 1080 < t && t < e
        ? ((n.style.fontSize = "5vw"), (n.style.textAlign = "center"), (i.style.fontSize = "3vw"), (i.style.textAlign = "center"))
        : t <= 1080 && t < e
        ? ((n.style.fontSize = "4vw"), (n.style.textAlign = "center"), (i.style.fontSize = "2vw"), (i.style.textAlign = "center"))
        : e <= t &&
          (((e = document.querySelector(".clock-container")).style.left = "50%"),
          (e.style.transform = "translate(-50%, -0%)"),
          (n.style.fontSize = "7vw"),
          (n.style.textAlign = "center"),
          (i.style.fontSize = "4vw"),
          (i.style.textAlign = "center"));
}
function loadRandomVideo() {
    var e,
        t,
        n = window.innerWidth || document.documentElement.clientWidth,
        i =
            ((n =
                (window.innerHeight || document.documentElement.clientHeight) < n
                    ? ((e = document.getElementById("video-background")),
                      (t = "./background_video/"),
                      ["3037654853.mp4", "3049184066.mp4", "3231081497.mp4", "3238678030.mp4", "3242897185.mp4", "3252186628.mp4", "3265233571.mp4", "3269475921.mp4", "3271047302.mp4", "3271523338.mp4","3272404410.mp4", "3274133316.mp4","2303052911.mp4","3388513498.mp4","3389792821.mp4","3337932816.mp4","3685214685.mp4","5544129885.mp4","3390843420.mp4","3434632755.mp4","5544129885.mp4"])
                    : ((e = document.getElementById("video-background")), (t = "./background_video_portrait/"), ["1990772497.mp4", "2383824380.mp4", "2712114224.mp4", "2730071537.mp4", "2811117418.mp4", "2867637516.mp4"])),
            Math.floor(Math.random() * n.length)),
        n = n[i];
    e.src = t + n;
}
setInterval(updateTime, 50), setInterval(updateDate, 50), loadRandomVideo(), adjustTextSize();
