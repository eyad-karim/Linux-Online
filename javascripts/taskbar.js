let taskbar = document.getElementById("taskbar")

let taskbar_apps_ul = document.getElementById("taskbar-apps-ul")
let taskbar_apps_list = [
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
    let app = document.createElement("li")
    app.classList.add("taskbar-app")
    app.innerHTML = `<img src="./Images/logos/${appIcon}" alt="${appName}" draggable="false">`
    taskbar_apps_ul.appendChild(app)
    taskbar_apps_list.push({appName, appIcon})
}

taskbar_apps_list.forEach(app => {
    addTaskbar_app(app.appName, app.appIcon)
})

let taskbar_apps = document.querySelectorAll(".taskbar-app")

console.log("working taskbar.js");