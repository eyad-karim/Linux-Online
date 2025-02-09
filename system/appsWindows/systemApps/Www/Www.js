var Www_taskbarOpenButton = document.getElementById("Www-taskbarOpenButton")
Www_taskbarOpenButton.addEventListener("click", () => {
    openWww()
})

function openWww() {
    var Www = newAppWindow("Www")
    document.getElementById(`${Www.id}-body`).innerHTML = `
        <iframe src="https://lichess.org/analysis" style="width: 100%; height: 100%; border: none;"></iframe>
    `
}