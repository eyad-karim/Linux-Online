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

function addTaskbar_app(appName, appIcon) {
    var app = document.createElement("li")
    app.id = `${appName}-taskbarOpenButton`
    app.classList.add("taskbar-app")
    app.innerHTML = `<img src="./assets/apps-logos/${appIcon}" alt="${appName}" draggable="false">`
    taskbar_apps_ul.appendChild(app)
    taskbar_apps_list.push({appName, appIcon})
}

taskbar_apps_list.forEach(app => {
    addTaskbar_app(app.appName, app.appIcon)
})

var taskbar_apps = document.querySelectorAll(".taskbar-app")