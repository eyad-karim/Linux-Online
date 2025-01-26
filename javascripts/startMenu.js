let startMenu = document.getElementById("startMenu")
let startMenu_button = document.getElementById("startMenu-button")
let desktop = document.getElementById("desktop")

startMenu_button.addEventListener("click",() => {
    startMenu.classList.toggle("open")
})
desktop.addEventListener("click",() => {
    startMenu.classList.remove("open")
})

let allAppsList = document.getElementById("allAppsList")
let startMenu_apps_list = [
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
    let app = document.createElement("li")
    app.classList.add("startMenu-app")
    app.innerHTML = `<img src="./Images/logos/${appIcon}" alt="${appName}"><span>${appName}</span>`;
    allAppsList.appendChild(app)
    startMenu_apps_list.push({appName,appIcon})
}

startMenu_apps_list.forEach(app => {
    addStartMenu_app(app.appName,app.appIcon);
})

let startMenu_apps = document.querySelectorAll(".startMenu-app")

console.log("working startMenu.js");