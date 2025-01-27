let appsWindowsList = []
function newAppWindow(appWindowName) {
    let div = document.createElement("div")
    
    let numberOfTheSameApp = appsWindowsList.filter(app => app.includes(appWindowName)).length
    div.id=`${appWindowName}${numberOfTheSameApp}-appWindow`;
    appsWindowsList.push(div.id)
    
    div.classList.add("appWindow")
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
            ${appWindowName}
        </header>
        <div class="appWindow-body">
            comming soon
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
    document.querySelector("main").appendChild(div)

    appsWindows = document.querySelectorAll(".appWindow")
    addEachAppWindowToZIndexList()
    addSortingForEachAppWindow()
    
    // add drag and resize functions
    applyResizeAndDrag(div)
}

