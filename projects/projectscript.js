function updateTime() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    updateTime();
    setInterval(updateTime, 1000);
  
    const startButton = document.querySelector(".Start");
    const startMenu = document.querySelector(".StartMenu");
  
    startButton.addEventListener("click", function () {
      startMenu.classList.toggle("visible");
  
      if (startMenu.classList.contains("visible")) {
        startButton.style.backgroundImage = "url('assets/ui/startbutton.png')";
        console.log("Start Menu is now visible");
      } else {
        startButton.style.backgroundImage =
          "url('assets/ui/startbutton.png')";
        console.log("Start Menu is now hidden");
      }
    });
  
    const aboutMeButton = document.getElementById("aboutMeButton");
    const aboutMeTask = document.getElementById("aboutMeTask");
    const popupWindow = document.getElementById("popup-window");
  
    window.addEventListener("load", function () {
      popupWindow.classList.add("visible");
    });
  
    aboutMeButton.addEventListener("click", function () // document
    //   .getElementById("aboutMeButton")
    //   .addEventListener("click", function ()
    {
      if (popupWindow.classList.contains("visible")) {
        popupWindow.classList.remove("visible");
        setTimeout(() => {
          popupWindow.classList.add("hidden");
        }, 500);
        aboutMeTask.style.backgroundImage = "url('assets/ui/tab.png)";
      } else {
        popupWindow.classList.remove("hidden");
        setTimeout(() => {
          popupWindow.classList.add("visible");
        }, 10);
        aboutMeTask.style.backgroundImage = "url('assets/ui/tab.png')";
      }
    });
  
    const browserArea = document.querySelector(".Browser");
  
    setTimeout(() => {
      popupWindow.style.left = "450px";
      popupWindow.style.top = "50px";
      popupWindow.style.display = "grid";
    }, 100);
  
    let isDragging = false;
    let offset = { x: 0, y: 0 };
  
    popupWindow.addEventListener("mousedown", (event) => {
      isDragging = true;
      const rect = popupWindow.getBoundingClientRect();
      offset.x = event.clientX - rect.left;
      offset.y = event.clientY - rect.top;
    });
  
    document.addEventListener("mousemove", (event) => {
      if (isDragging) {
        const browserRect = browserArea.getBoundingClientRect();
        const popupRect = popupWindow.getBoundingClientRect();
  
        let newLeft = event.clientX - offset.x;
        let newTop = event.clientY - offset.y;
  
        newLeft = Math.max(browserRect.left, newLeft);
  
        newLeft = Math.min(browserRect.right - popupRect.width, newLeft);
  
        newTop = Math.max(browserRect.top, newTop);
  
        newTop = Math.min(browserRect.bottom - popupRect.height, newTop);
  
        popupWindow.style.left = `${newLeft}px`;
        popupWindow.style.top = `${newTop}px`;
      }
    });
  
    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  });
  