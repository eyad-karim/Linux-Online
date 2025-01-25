let notificationsMenu = document.getElementById("notificationsMenu")
let notificationsMenu_button = document.getElementById("notificationsMenu-button")
let controlMenu = document.getElementById("controlMenu")
let controlMenu_button = document.getElementById("controlMenu-button")

notificationsMenu_button.addEventListener("click",() => {    
    notificationsMenu.classList.toggle("open")
    notificationsList.forEach(notification => {
        if (notification.type === "unread") {
            notification.type = "read"
        }
    })
    updateUnreadStatus()
})
desktop.addEventListener("click",() => {
    notificationsMenu.classList.remove("open")
})
controlMenu_button.addEventListener("click",() => {
    notificationsMenu.classList.remove("open")
})

controlMenu_button.addEventListener("click",() => {    
    controlMenu.classList.toggle("open")
})
desktop.addEventListener("click",() => {
    controlMenu.classList.remove("open")
})
notificationsMenu_button.addEventListener("click",() => {
    controlMenu.classList.remove("open")
})

console.log("working headerMenus.js");