function newAppWindow(appWindowName) {
    let div = document.createElement("div")
    div.id=`${appWindowName}-appWindow`;
    div.classList.add("appWindow")
    div.style.width = "800px"
    div.style.height = "500px"

    div.innerHTML = `
    <header class="appWindow_options">
        <span id="${appWindowName}-appWindow-close"><img src="images/icons/close.svg" alt="close"></span>
        <span id="${appWindowName}-appWindow-fullscreenToggle"><img src="images/icons/open_fullscreen.svg" alt="open_fullscreen"></span>
        <span id="${appWindowName}-appWindow-minimize"><img src="images/icons/minimize.svg" alt="minimize"></span>
    </header>
    <div class="appWindow_content">
        <header id="${appWindowName}-appWindow-header">
            ${appWindowName}
        </header>
        <div class="appWindow_body">
            comming soon
        </div>
    </div>
    <div class="appWindow-tools">
        <div id="${appWindowName}-appWindow-resize-left" class="appWindow-resize-x resize-left"></div>
        <div id="${appWindowName}-appWindow-resize-right" class="appWindow-resize-x resize-right"></div>
        <div id="${appWindowName}-appWindow-resize-top" class="appWindow-resize-y resize-top"></div>
        <div id="${appWindowName}-appWindow-resize-bottom" class="appWindow-resize-y resize-bottom"></div>
        <div id="${appWindowName}-appWindow-resize-top-left" class="appWindow-resize-xy resize-top-left"></div>
        <div id="${appWindowName}-appWindow-resize-top-right" class="appWindow-resize-xy resize-top-right"></div>
        <div id="${appWindowName}-appWindow-resize-bottom-left" class="appWindow-resize-xy resize-bottom-left"></div>
        <div id="${appWindowName}-appWindow-resize-bottom-right" class="appWindow-resize-xy resize-bottom-right"></div>
    </div>`;
    document.querySelector("main").appendChild(div)

    appsWindows = document.querySelectorAll(".appWindow")
    addEachAppWindowToZIndexList()
    addSortingForEachAppWindow()
    
    // add drag and resize functions
    dragElement(div)
    // x resize
    rightResizeElement(div)
    leftResizeElement(div)
    // y resize
    bottomResizeElement(div)
    topResizeElement(div)
    // corners resize
    bottomRightResizeElement(div)
    bottomLeftResizeElement(div)
    topLeftResizeElement(div)
    topRightResizeElement(div)
}

newAppWindow("ss")
newAppWindow("c")
newAppWindow("es")