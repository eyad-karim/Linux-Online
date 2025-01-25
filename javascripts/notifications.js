notificationsMenu = document.getElementById("notificationsMenu")
notificationsMenu_button = document.getElementById("notificationsMenu-button")
let notifications_ul = document.getElementById("notificationsMenu-ul")

let notificationsList = [
    {
        icon: "wifi.png",
        message: "Connected to Wi-Fi network",
        type: "read"
    }
]

function addNotification(icon, message) {
    let notification = document.createElement("li")
    notification.classList.add("notification")
    notification.innerHTML = `<img src="./Images/icons/${icon}" alt="notification icon"><p>${message}</p>`
    notifications_ul.appendChild(notification)
    notificationsList.push({icon, message, type: "unread"})
    updateUnreadStatus()
    newToast(icon, message)
}

function clearNotifications() {
    notifications_ul.innerHTML = ""
    notificationsList = []
    updateUnreadStatus()
}

function updateUnreadStatus() {
    const hasUnread = notificationsList.some(notification => notification.type === "unread")
    if (hasUnread) {
        notificationsMenu_button.classList.add("unread")
    } else {
        notificationsMenu_button.classList.remove("unread")
    }
    notificationsMenu_button.setAttribute("data-unread", notificationsList.filter(notification => notification.type === "unread").length);
}

notificationsList.forEach(notification => {
    addNotification(notification.icon, notification.message)
})

updateUnreadStatus()

function newToast (icon,message) {
    let toast = document.createElement("div")
    // let messageContainer = document.createElement("p")
    // toast.appendChild(messageContainer)
    toast.classList.add("toast")
    toast.innerHTML = `<img src="./Images/icons/${icon}"><p>${message}</p>`
    document.body.appendChild(toast)
    setTimeout(() => {
        toast.remove();
    }, 3000)
}

setTimeout(() => {
    addNotification("notifications.png", "New notification received")
}, 5000)

console.log("working notifications.js");