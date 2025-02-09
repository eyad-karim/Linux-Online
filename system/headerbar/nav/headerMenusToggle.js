var notificationsMenu = document.getElementById("notificationsMenu")
var notificationsMenu_button = document.getElementById("notificationsMenu-button")
var desktop = document.getElementById("desktop")

notificationsMenu_button.addEventListener("click",() => {    
    notificationsMenu.classList.toggle("open")
    notificationsList.forEach(notification => {
        if (notification.type === "unread") {
            notification.type = "read";
        }
    })
    updateUnreadStatus()
})
desktop.addEventListener("click",() => {
    notificationsMenu.classList.remove("open")
})

var controlMenu = document.getElementById("controlMenu")
var controlMenu_button = document.getElementById("controlMenu-button")

controlMenu_button.addEventListener("click",() => {    
    controlMenu.classList.toggle("open")
})
desktop.addEventListener("click",() => {
    controlMenu.classList.remove("open")
})