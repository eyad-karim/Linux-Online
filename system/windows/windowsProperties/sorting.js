var zIndexList = []

function addSortingEventForwindow(windowID) {
    document.getElementById(windowID).addEventListener('mousedown',() => {
        sortInFront(document.getElementById(windowID))
    })
}
function addwindowToZIndexList(windowID) {
    zIndexList[zIndexList.length] = windowID
}


function sortInFront(window) {
    var foucesedWindow = zIndexList.splice(zIndexList.indexOf(window.id),1)[0];    
    var newZIndexList = [foucesedWindow,...zIndexList];
    zIndexList = newZIndexList;
    for(i=0;i<zIndexList.length;i++){
        var window = document.getElementById(zIndexList[i]);
        window.style.zIndex = 200 + (zIndexList.length - i);
    }
    console.log(zIndexList);
}