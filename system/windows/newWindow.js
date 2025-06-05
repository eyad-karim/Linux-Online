var windowsList = []
function getAvailableWindowName(windowName, windowNumber) {
    if (windowsList.includes(`${windowName}${windowNumber}-window`)) {
        windowNumber++
        return getAvailableWindowName(windowName, windowNumber)
    } else {
        return `${windowName}${windowNumber}-window`
    }

}
function newwindow(windowName,x,y,width,height) {
    var div = document.createElement("div")

    div.id=getAvailableWindowName(windowName, 0); //window id
    windowsList.push(div.id) // add window to the list
    
    div.classList.add("window") // add window class
    div.classList.add(`${windowName}-window-style`) // add window class
    div.style.width = width? width + "px" : "1200px";
    div.style.height = height? height + "px" : "800px";
    div.style.left = x? x + "px" : "100px";
    div.style.top = y? y + "px" : "100px";

    div.innerHTML = `
    <header class="window-options">
        <span id="${div.id}-close"><img src="assets/system-icons/close.svg" alt="svg icon"></span>
        <span id="${div.id}-fullscreenToggle"><img src="assets/system-icons/open_fullscreen.svg" alt="svg icon"></span>
        <span id="${div.id}-minimize"><img src="assets/system-icons/minimize.svg" alt="svg icon"></span>
    </header>
    <div class="window-content">
        <header id="${div.id}-header">
            <img src="assets/apps-logos/${windowName}.png" alt="window">
            ${windowName}
        </header>
        <div id="${div.id}-body" class="window-body">
            body
        </div>
        <footer class="window-footer">${div.id}</footer>
    </div>
    <div class="window-resizer">
        <div id="${div.id}-resize-left" class="window-resize-x resize-left"></div>
        <div id="${div.id}-resize-right" class="window-resize-x resize-right"></div>
        <div id="${div.id}-resize-top" class="window-resize-y resize-top"></div>
        <div id="${div.id}-resize-bottom" class="window-resize-y resize-bottom"></div>
        <div id="${div.id}-resize-top-left" class="window-resize-xy resize-top-left"></div>
        <div id="${div.id}-resize-top-right" class="window-resize-xy resize-top-right"></div>
        <div id="${div.id}-resize-bottom-left" class="window-resize-xy resize-bottom-left"></div>
        <div id="${div.id}-resize-bottom-right" class="window-resize-xy resize-bottom-right"></div>
    </div>`;
    document.querySelector("main").appendChild(div) // add window to the main

    appsWindows = document.querySelectorAll(".window") // refresh appsWindows variable
    addwindowToZIndexList(div.id) // add window to the zIndexList
    addSortingEventForwindow(div.id) // add sorting for window
    sortInFront(div) // sort window in front
    
    // add drag and resize functions
    applyResizeAndDrag(div)
    // add close function
    document.getElementById(`${div.id}-close`).addEventListener("click", () => {
        closewindow(div)
    })

    return div;
}

function closewindow(window) {
    console.log("closed");
    zIndexList = zIndexList.filter(app => app !== window.id)    
    window.remove()
    windowsList = windowsList.filter(app => app !== window.id)
}