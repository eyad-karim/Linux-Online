// Get elements
var notificationsMenu = document.getElementById("notificationsMenu")
var notificationsMenu_button = document.getElementById("notificationsMenu-button")
var notifications_container = document.getElementById("notificationsMenu-container")
var notifications = document.querySelectorAll(".notification")
var notificationsMenu_clearAll_button = document.getElementById("notificationsMenu-clearAll-button")

// Initial notifications list
var notificationsList = [
    {
        id: 1,
        icon: "wifi.svg",
        message: "Connected to Wi-Fi network.",
        type: "unread"
    }
]

// Display all notifications on load
function displayAllNotifications() {
    updateUnreadStatus()
    notificationsList.forEach(notification => {
        displayNotification(notification)
    })
}
displayAllNotifications()

// Display a single notification
function displayNotification(notificationData) {
    var notification = document.createElement("li")
    notification.id = `notification-${notificationData.id}`
    notification.classList.add("notification")
    notification.innerHTML = `<img src="./images/icons/${notificationData.icon}" alt="notification icon"><p>${notificationData.message}</p>`
    notifications_container.appendChild(notification)
    notifications = document.querySelectorAll(".notification")
    updateDevareListeners()
}

// Add a new notification
function newNotification(icon, message) {
    var newNotificationData = {id: notificationsList.length + 1, icon, message, type: "unread"}
    notificationsList.push(newNotificationData)
    displayNotification(newNotificationData)
    updateUnreadStatus()
    newToast(icon, message)
}

// Devare a notification
function devareNotification(notification) {
    console.log(notification);
    notificationsList.splice(notification.id - 1, 1)
    notifications_container.removeChild(notification)
    updateUnreadStatus()
}

// Clear all notifications
function clearAllNotifications() {
    notifications_container.innerHTML = ""
    notificationsList = []
    updateUnreadStatus()
}

// Update unread status
function updateUnreadStatus() {
    const hasUnread = notificationsList.some(notification => notification.type === "unread")
    if (hasUnread) {
        notificationsMenu_button.classList.add("unread")
    } else {
        notificationsMenu_button.classList.remove("unread")
    }
    notificationsMenu_button.setAttribute("data-unread", notificationsList.filter(notification => notification.type === "unread").length)
}

// Show a toast notification
function newToast(icon, message) {
    var toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = `<img src="./images/icons/${icon}"><p>${message}</p>`
    document.getElementById("toast-container").appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 3000)
}

// Event listeners
function updateDevareListeners() { // adds devare event listener to the new notifications
    notifications.forEach(notification => {
        notification.addEventListener("dblclick", () => {
            devareNotification(notification)
        })
    })
}

notificationsMenu_clearAll_button.addEventListener("click", clearAllNotifications)

// Example usage
setTimeout(() => {
    newNotification("notifications.svg", `New login at ${new Date().toLocaleTimeString()}`)
}, 2000)

var date = new Date();