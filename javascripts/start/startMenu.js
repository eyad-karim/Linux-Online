var startMenu = document.getElementById("startMenu")
var startMenu_button = document.getElementById("startMenu-button")
var desktop = document.getElementById("desktop")

startMenu_button.addEventListener("click",() => {
    startMenu.classList.toggle("open")
})
desktop.addEventListener("click",() => {
    startMenu.classList.remove("open")
})

var allAppsList = document.getElementById("allAppsList")
var startMenu_apps_list = [
    {
        appName: "Files",
        appIcon: "Files.png",
    },
    {
        appName: "Www",
        appIcon: "Www.png",
    },
    {
        appName: "Settings",
        appIcon: "Settings.png",
    },
    {
        appName: "Notes",
        appIcon: "Notes.png",
    },
    {
        appName: "CMD",
        appIcon: "CMD.png",
    },
]

function addStartMenu_app(appName,appIcon) {
    var app = document.createElement("li")
    app.classList.add("startMenu-app")
    app.innerHTML = `<img src="./images/logos/${appIcon}" alt="${appName}"><span>${appName}</span>`;
    allAppsList.appendChild(app)
    startMenu_apps_list.push({appName,appIcon})
}

startMenu_apps_list.forEach(app => {
    addStartMenu_app(app.appName,app.appIcon);
})

var startMenu_apps = document.querySelectorAll(".startMenu-app")