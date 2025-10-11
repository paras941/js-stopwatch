let minutes = 0, seconds = 0, centiseconds = 0;
let timer = null;
let running = false;

function updateDisplay() {
  const m = String(minutes).padStart(2, "0");
  const s = String(seconds).padStart(2, "0");
  const cs = String(centiseconds).padStart(2, "0");
  document.getElementById("display").textContent = `${m}:${s}:${cs}`;
}

function startStop() {
  if (!running) {
    timer = setInterval(() => {
      centiseconds++;
      if (centiseconds === 100) {
        centiseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10); // 10ms = 1 centisecond
    running = true;
    document.getElementById("startStop").textContent = "PAUSE";
  } else {
    clearInterval(timer);
    running = false;
    document.getElementById("startStop").textContent = "RESUME";
  }
}

function reset() {
  clearInterval(timer);
  running = false;
  minutes = 0;
  seconds = 0;
  centiseconds = 0;
  updateDisplay();
  document.getElementById("startStop").textContent = "RESUME";
}

document.addEventListener("DOMContentLoaded", () => {
  // Safe even if the script is moved to <head>
  document.getElementById("startStop").addEventListener("click", startStop);
  document.getElementById("reset").addEventListener("click", reset);
  updateDisplay();
});
