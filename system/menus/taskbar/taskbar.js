var taskbar = document.getElementById("taskbar")

var taskbar_apps_ul = document.getElementById("taskbar-apps-ul")
var taskbar_apps_list = [
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
]

function addTaskbar_app(appName, appIcon, n) {
    var app = document.createElement("li")
    app.id = `${appName}-taskbarOpenButton`
    app.classList.add("taskbar-app")
    app.style.animationDelay = `${n * 0.1}s`
    app.innerHTML = `<img src="./assets/apps-logos/${appIcon}" alt="${appName}" draggable="false">`
    taskbar_apps_ul.appendChild(app)
    taskbar_apps_list.push({appName, appIcon})
}

taskbar_apps_list.forEach(app => {
    addTaskbar_app(app.appName, app.appIcon, taskbar_apps_list.indexOf(app) + 4)
})

var taskbar_apps = document.querySelectorAll(".taskbar-app")

/* notificationsMenu and controlMenu open event */
var desktop = document.getElementById("desktop")
var notificationsMenu = document.getElementById("notificationsMenu")
var notificationsMenu_button = document.getElementById("notificationsMenu-button")
var controlMenu = document.getElementById("controlMenu")
var controlMenu_button = document.getElementById("controlMenu-button")
var startMenu_button = document.getElementById("startMenu-button")

notificationsMenu_button.addEventListener("click",() => {    
    notificationsMenu.classList.toggle("open")
    notificationsList.forEach(notification => {
        if (notification.type === "unread") {
            notification.type = "read";
        }
    })
    updateUnreadStatus()
    startMenu.classList.remove("open")
    controlMenu.classList.remove("open")
})
controlMenu_button.addEventListener("click",() => {    
    controlMenu.classList.toggle("open")
    startMenu.classList.remove("open")
    notificationsMenu.classList.remove("open")
})
desktop.addEventListener("click",() => {
    notificationsMenu.classList.remove("open")
    controlMenu.classList.remove("open")
})