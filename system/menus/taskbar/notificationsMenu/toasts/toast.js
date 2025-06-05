function newToast(title, message, icon) {
    var toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML = `<div><img alt="svg icon" src="assets/system-icons/${icon}"><span>${title}</span></div><p>${message}</p>`
    document.getElementById("toast-container").appendChild(toast)
    setTimeout(() => {
        toast.remove()
    }, 3000)
}