let appsWindows = document.querySelectorAll(".appWindow")

appsWindows.forEach(appWindow => {
    applyResizeAndDrag(appWindow)
})

function applyResizeAndDrag(appWindow) {
    dragElement(appWindow)
    
    // x resize
    rightResizeElement(appWindow)
    leftResizeElement(appWindow)
    // y resize
    bottomResizeElement(appWindow)
    topResizeElement(appWindow)
    // corners resize
    bottomRightResizeElement(appWindow)
    bottomLeftResizeElement(appWindow)
    topLeftResizeElement(appWindow)
    topRightResizeElement(appWindow)
}

function dragElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]

    var posX = 0,
        posY = 0,
        posOX = 0,
        posOY = 0;

    document.getElementById(appWindowName + "-appWindow-header").onmousedown = dragMouseDown;
    


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOX = e.clientX;
        posOY = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
        appsWindows.forEach(appWindow => {
            appWindow.classList.add("blur")
        })
        appWindow.classList.remove("blur")
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posX = posOX - e.clientX;
        posY = posOY - e.clientY;
        posOX = e.clientX;
        posOY = e.clientY;

        appWindow.style.top = appWindow.offsetTop - posY + "px";
        appWindow.style.left = appWindow.offsetLeft - posX + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        appsWindows.forEach((appWindow) => {
            appWindow.classList.remove("blur")
        })
    }
}


function rightResizeElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]
    var posX = 0,
        posOX = 0,
        width = appWindow.style.width.split("px")[0];
    document.getElementById(appWindowName + "-appWindow-resize-right").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOX = e.clientX;
        width = appWindow.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posX = posOX - e.clientX;
        posOX = e.clientX;
        width = width - posX;
        appWindow.style.width = width + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function leftResizeElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]
    var posX = 0,
        posOX = 0,
        width = appWindow.style.width.split("px")[0];

    document.getElementById(appWindowName + "-appWindow-resize-left").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        width = appWindow.style.width.split("px")[0];
        posOX = e.clientX;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posX = e.clientX - posOX;
        posOX = e.clientX;
        width = width - posX;
        appWindow.style.width = width + "px";
        if (width + posX > 200) {
            appWindow.style.left = appWindow.offsetLeft + posX + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bottomResizeElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        height = appWindow.style.height.split("px")[0];

    document.getElementById(appWindowName + "-appWindow-resize-bottom").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = appWindow.style.height.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posY = posOY - e.clientY;
        posOY = e.clientY;
        height = height - posY;
        appWindow.style.height = height + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function topResizeElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        height = appWindow.style.height.split("px")[0];

    document.getElementById(appWindowName + "-appWindow-resize-top").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        height = appWindow.style.height.split("px")[0];
        posOY = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posY = e.clientY - posOY;
        posOY = e.clientY;
        height = height - posY;
        appWindow.style.height = height + "px";
        if (height + posY > 200) {
            appWindow.style.top = appWindow.offsetTop + posY + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bottomRightResizeElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        posX = 0,
        posOX = 0,
        height = appWindow.style.height.split("px")[0],
        width = appWindow.style.width.split("px")[0];

    document.getElementById(appWindowName + "-appWindow-resize-bottom-right").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = appWindow.style.height.split("px")[0];
        posOX = e.clientX;
        width = appWindow.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posY = posOY - e.clientY;
        posOY = e.clientY;
        height = height - posY;
        appWindow.style.height = height + "px";
        posX = posOX - e.clientX;
        posOX = e.clientX;
        width = width - posX;
        appWindow.style.width = width + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bottomLeftResizeElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        posX = 0,
        posOX = 0,
        height = appWindow.style.height.split("px")[0],
        width = appWindow.style.width.split("px")[0];

    document.getElementById(appWindowName + "-appWindow-resize-bottom-left").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = appWindow.style.height.split("px")[0];
        posOX = e.clientX;
        width = appWindow.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posY = posOY - e.clientY;
        posOY = e.clientY;
        height = height - posY;
        appWindow.style.height = height + "px";
        posX = e.clientX - posOX;
        posOX = e.clientX;
        width = width - posX;
        appWindow.style.width = width + "px";
        if (width + posX > 200) {
            appWindow.style.left = appWindow.offsetLeft + posX + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function topRightResizeElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        posX = 0,
        posOX = 0,
        height = appWindow.style.height.split("px")[0],
        width = appWindow.style.width.split("px")[0];

    document.getElementById(appWindowName + "-appWindow-resize-top-right").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = appWindow.style.height.split("px")[0];
        posOX = e.clientX;
        width = appWindow.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        posY = e.clientY - posOY;
        posOY = e.clientY;
        height = height - posY;
        appWindow.style.height = height + "px";
        if (height + posY > 200) {
            appWindow.style.top = appWindow.offsetTop + posY + "px";
        }
        posX = posOX - e.clientX;
        posOX = e.clientX;
        width = width - posX;
        appWindow.style.width = width + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function topLeftResizeElement(appWindow) {
    let appWindowName = appWindow.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        posX = 0,
        posOX = 0,
        height = appWindow.style.height.split("px")[0],
        width = appWindow.style.width.split("px")[0];

    document.getElementById(appWindowName + "-appWindow-resize-top-left").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = appWindow.style.height.split("px")[0];
        posOX = e.clientX;
        width = appWindow.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        posY = e.clientY - posOY;
        posOY = e.clientY;
        height = height - posY;
        appWindow.style.height = height + "px";
        if (height + posY > 200) {
            appWindow.style.top = appWindow.offsetTop + posY + "px";
        }
        posX = e.clientX - posOX;
        posOX = e.clientX;
        width = width - posX;
        appWindow.style.width = width + "px";
        if (width + posX > 200) {
            appWindow.style.left = appWindow.offsetLeft + posX + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}