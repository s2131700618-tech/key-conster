open_key = document.getElementById("open-key");

let timeLeft = 5;
var can_click = false;

const timerId = setInterval(() => {
  open_key.textContent = "請等待 " + timeLeft + " 秒。";

  if (timeLeft <= 0) {
    open_key.textContent = "繼續";
    clearInterval(timerId);
    can_click = true;
  } else {
    timeLeft--;
  }
}, 1000);

open_key.onclick = function () {
  if (can_click) {
    window.location.assign("");
  }
};
