// Get elements
notificationsMenu = document.getElementById("notificationsMenu") // don't put let in front of this because it's already declared
notificationsMenu_button = document.getElementById("notificationsMenu-button") // don't put let in front of this because it's already declared
let notifications_container = document.getElementById("notificationsMenu-container")
let notifications = document.querySelectorAll(".notification")
let notificationsMenu_clearAll_button = document.getElementById("notificationsMenu-clearAll-button")

// Initial notifications list
let notificationsList = [
    {
        id: 1,
        icon: "wifi.png",
        message: "Connected to Wi-Fi network.",
        type: "read"
    }
]

// Display all notifications on load
function displayAllNotifications() {
    notificationsList.forEach(notification => {
        displayNotification(notification)
    })
}
displayAllNotifications()

// Display a single notification
function displayNotification(notificationData) {
    let notification = document.createElement("li")
    notification.id = `notification-${notificationData.id}`
    notification.classList.add("notification")
    notification.innerHTML = `<img src="./Images/icons/${notificationData.icon}" alt="notification icon"><p>${notificationData.message}</p>`
    notifications_container.appendChild(notification)
    notifications = document.querySelectorAll(".notification")
    updateDeleteListeners()
}

// Add a new notification
function newNotification(icon, message) {
    let newNotificationData = {id: notificationsList.length + 1, icon, message, type: "unread"}
    notificationsList.push(newNotificationData)
    displayNotification(newNotificationData)
    updateUnreadStatus()
    newToast(icon, message)
}

// Delete a notification
function deleteNotification(notification) {
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
    let toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = `<img src="./Images/icons/${icon}"><p>${message}</p>`
    document.getElementById("toast-container").appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 3000)
}

// Event listeners
function updateDeleteListeners() { // adds delete event listener to the new notifications
    notifications.forEach(notification => {
        notification.addEventListener("dblclick", () => {
            deleteNotification(notification)
        })
    })
}

notificationsMenu_clearAll_button.addEventListener("click", clearAllNotifications)

// Example usage
setTimeout(() => {
    newNotification("notifications.png", `New login at ${new Date().toLocaleTimeString()}`)
}, 5000)

console.log("working notifications.js")