appsWindows = document.querySelectorAll(".window")

appsWindows.forEach(window => {
    applyResizeAndDrag(window)
})

function applyResizeAndDrag(window) {
    dragElement(window)
    
    // x resize
    rightResizeElement(window)
    leftResizeElement(window)
    // y resize
    bottomResizeElement(window)
    topResizeElement(window)
    // corners resize
    bottomRightResizeElement(window)
    bottomLeftResizeElement(window)
    topLeftResizeElement(window)
    topRightResizeElement(window)
}

function dragElement(window) {
    var windowName = window.id.split("-")[0]

    var posX = 0,
        posY = 0,
        posOX = 0,
        posOY = 0;

    document.getElementById(windowName + "-window-header").onmousedown = dragMouseDown;
    


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOX = e.clientX;
        posOY = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
        
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posX = posOX - e.clientX;
        posY = posOY - e.clientY;
        posOX = e.clientX;
        posOY = e.clientY;
        
        window.style.top = window.offsetTop - posY + "px";
        window.style.left = window.offsetLeft - posX + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


function rightResizeElement(window) {
    var windowName = window.id.split("-")[0]
    var posX = 0,
        posOX = 0,
        width = window.style.width.split("px")[0];
    document.getElementById(windowName + "-window-resize-right").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOX = e.clientX;
        width = window.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posX = posOX - e.clientX;
        posOX = e.clientX;
        width = width - posX;
        window.style.width = width + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function leftResizeElement(window) {
    var windowName = window.id.split("-")[0]
    var posX = 0,
        posOX = 0,
        width = window.style.width.split("px")[0];

    document.getElementById(windowName + "-window-resize-left").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        width = window.style.width.split("px")[0];
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
        window.style.width = width + "px";
        if (width + posX > 200) {
            window.style.left = window.offsetLeft + posX + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bottomResizeElement(window) {
    var windowName = window.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        height = window.style.height.split("px")[0];

    document.getElementById(windowName + "-window-resize-bottom").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = window.style.height.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posY = posOY - e.clientY;
        posOY = e.clientY;
        height = height - posY;
        window.style.height = height + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function topResizeElement(window) {
    var windowName = window.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        height = window.style.height.split("px")[0];

    document.getElementById(windowName + "-window-resize-top").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        height = window.style.height.split("px")[0];
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
        window.style.height = height + "px";
        if (height + posY > 200) {
            window.style.top = window.offsetTop + posY + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bottomRightResizeElement(window) {
    var windowName = window.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        posX = 0,
        posOX = 0,
        height = window.style.height.split("px")[0],
        width = window.style.width.split("px")[0];

    document.getElementById(windowName + "-window-resize-bottom-right").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = window.style.height.split("px")[0];
        posOX = e.clientX;
        width = window.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posY = posOY - e.clientY;
        posOY = e.clientY;
        height = height - posY;
        window.style.height = height + "px";
        posX = posOX - e.clientX;
        posOX = e.clientX;
        width = width - posX;
        window.style.width = width + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bottomLeftResizeElement(window) {
    var windowName = window.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        posX = 0,
        posOX = 0,
        height = window.style.height.split("px")[0],
        width = window.style.width.split("px")[0];

    document.getElementById(windowName + "-window-resize-bottom-left").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = window.style.height.split("px")[0];
        posOX = e.clientX;
        width = window.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        posY = posOY - e.clientY;
        posOY = e.clientY;
        height = height - posY;
        window.style.height = height + "px";
        posX = e.clientX - posOX;
        posOX = e.clientX;
        width = width - posX;
        window.style.width = width + "px";
        if (width + posX > 200) {
            window.style.left = window.offsetLeft + posX + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function topRightResizeElement(window) {
    var windowName = window.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        posX = 0,
        posOX = 0,
        height = window.style.height.split("px")[0],
        width = window.style.width.split("px")[0];

    document.getElementById(windowName + "-window-resize-top-right").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = window.style.height.split("px")[0];
        posOX = e.clientX;
        width = window.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        posY = e.clientY - posOY;
        posOY = e.clientY;
        height = height - posY;
        window.style.height = height + "px";
        if (height + posY > 200) {
            window.style.top = window.offsetTop + posY + "px";
        }
        posX = posOX - e.clientX;
        posOX = e.clientX;
        width = width - posX;
        window.style.width = width + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function topLeftResizeElement(window) {
    var windowName = window.id.split("-")[0]
    var posY = 0,
        posOY = 0,
        posX = 0,
        posOX = 0,
        height = window.style.height.split("px")[0],
        width = window.style.width.split("px")[0];

    document.getElementById(windowName + "-window-resize-top-left").onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        posOY = e.clientY;
        height = window.style.height.split("px")[0];
        posOX = e.clientX;
        width = window.style.width.split("px")[0];
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        posY = e.clientY - posOY;
        posOY = e.clientY;
        height = height - posY;
        window.style.height = height + "px";
        if (height + posY > 200) {
            window.style.top = window.offsetTop + posY + "px";
        }
        posX = e.clientX - posOX;
        posOX = e.clientX;
        width = width - posX;
        window.style.width = width + "px";
        if (width + posX > 200) {
            window.style.left = window.offsetLeft + posX + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}