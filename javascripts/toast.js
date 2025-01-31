function newToast(icon, message) {
    var toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = `<img src="./images/icons/${icon}"><p>${message}</p>`
    document.getElementById("toast-container").appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 3000)
}