function newToast(icon, message) {
    var toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = `<img src="assets/system-icons/${icon}"><p>${message}</p>`
    document.getElementById("toast-container").appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 3000)
}