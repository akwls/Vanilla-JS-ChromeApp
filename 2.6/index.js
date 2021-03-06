const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d"; 

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

function handleOffline() {
    console.log("You are Offline");
}

function handleOnline() {
    console.log("You are online");
}

// 이건 진짜 신기하다...
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);