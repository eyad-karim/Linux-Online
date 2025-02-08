var appsWindowsList = []
function checkIfAppWindowNameAvailable(appWindowName, appWindowNumber) {
    if (appsWindowsList.includes(`${appWindowName}${appWindowNumber}-appWindow`)) {
        appWindowNumber++
        return checkIfAppWindowNameAvailable(appWindowName, appWindowNumber)
    } else {
        return `${appWindowName}${appWindowNumber}-appWindow`
    }

}
function newAppWindow(appWindowName) {
    var div = document.createElement("div")

    div.id=checkIfAppWindowNameAvailable(appWindowName, 0); //appWindow id
    appsWindowsList.push(div.id) // add appWindow to the list
    
    div.classList.add("appWindow") // add appWindow class
    div.style.width = "800px"
    div.style.height = "500px"

    div.innerHTML = `
    <header class="appWindow-options">
        <span id="${div.id}-close"><img src="images/icons/close.svg" alt="close"></span>
        <span id="${div.id}-fullscreenToggle"><img src="images/icons/open_fullscreen.svg" alt="open_fullscreen"></span>
        <span id="${div.id}-minimize"><img src="images/icons/minimize.svg" alt="minimize"></span>
    </header>
    <div class="appWindow-content">
        <header id="${div.id}-header">
            <img src="images/logos/${appWindowName}.png" alt="appWindow">
            ${appWindowName}
        </header>
        <div id="${div.id}-body" class="appWindow-body">
            body
        </div>
        <footer class="appWindow-footer">${div.id}</footer>
    </div>
    <div class="appWindow-tools">
        <div id="${div.id}-resize-left" class="appWindow-resize-x resize-left"></div>
        <div id="${div.id}-resize-right" class="appWindow-resize-x resize-right"></div>
        <div id="${div.id}-resize-top" class="appWindow-resize-y resize-top"></div>
        <div id="${div.id}-resize-bottom" class="appWindow-resize-y resize-bottom"></div>
        <div id="${div.id}-resize-top-left" class="appWindow-resize-xy resize-top-left"></div>
        <div id="${div.id}-resize-top-right" class="appWindow-resize-xy resize-top-right"></div>
        <div id="${div.id}-resize-bottom-left" class="appWindow-resize-xy resize-bottom-left"></div>
        <div id="${div.id}-resize-bottom-right" class="appWindow-resize-xy resize-bottom-right"></div>
    </div>`;
    document.querySelector("main").appendChild(div) // add appWindow to the main

    appsWindows = document.querySelectorAll(".appWindow") // refresh appsWindows variable
    addAppWindowToZIndexList(div.id) // add appWindow to the zIndexList
    addSortingEventForAppWindow(div.id) // add sorting for appWindow
    sortInFront(div) // sort appWindow in front
    
    // add drag and resize functions
    applyResizeAndDrag(div)
    // add close function
    document.getElementById(`${div.id}-close`).addEventListener("click", () => {
        closeAppWindow(div)
    })

    return div;
}

function closeAppWindow(appWindow) {
    console.log("closed");
    zIndexList = zIndexList.filter(app => app !== appWindow.id)    
    appWindow.remove()
    appsWindowsList = appsWindowsList.filter(app => app !== appWindow.id)
}