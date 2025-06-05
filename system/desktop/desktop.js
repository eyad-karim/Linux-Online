var desktopIcons = document.querySelectorAll('.desktop-icon');
var draggging = false;

for (let i = 0; i < desktopIcons.length; i++) {
    desktopIcons[i].style.top = (Math.floor(i / Math.floor(document.getElementById("desktop").offsetWidth/100)) * 100) + (Math.floor(i / Math.floor(document.getElementById("desktop").offsetWidth/100)) * 10) + 10 + "px";
    desktopIcons[i].style.left = (i % Math.floor(document.getElementById("desktop").offsetWidth/100) * 100) + (i % Math.floor(document.getElementById("desktop").offsetWidth/100) * 10) + 10 + "px";
}

desktopIcons.forEach(icon => {
    dragElement(icon);
})
function dragElement(icon) {

    var posX = 0,
        posY = 0,
        posOX = 0,
        posOY = 0;

    icon.onmousedown = dragMouseDown;
    


    function dragMouseDown(e) {
        e = e || icon.event;
        e.preventDefault();

        posOX = e.clientX;
        posOY = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
        
    }

    function elementDrag(e) {
        e = e || icon.event;
        e.preventDefault();

        posX = posOX - e.clientX;
        posY = posOY - e.clientY;
        posOX = e.clientX;
        posOY = e.clientY;
        
        icon.style.top = icon.offsetTop - posY + "px";
        icon.style.left = icon.offsetLeft - posX + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        y = icon.offsetTop - posY;
        x = icon.offsetLeft - posX;
        numberOfGapsInY = Math.floor(y/100);
        numberOfGapsInX = Math.floor(x/100);
        
        icon.style.top = (Math.floor(y/100) * 100) + (numberOfGapsInY*10) + 10 + "px";
        icon.style.left = (Math.floor(x/100) * 100) + (numberOfGapsInX*10) + 10 + "px";
    }
}