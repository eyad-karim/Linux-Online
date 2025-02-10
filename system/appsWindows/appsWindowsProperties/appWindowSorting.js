var zIndexList = []

function addSortingEventForAppWindow(appWindowID) {
    document.getElementById(appWindowID).addEventListener('mousedown',() => {
        sortInFront(document.getElementById(appWindowID))
    })
}
function addAppWindowToZIndexList(appWindowID) {
    zIndexList[zIndexList.length] = appWindowID
}


function sortInFront(appWindow) {
    var foucesedWindow = zIndexList.splice(zIndexList.indexOf(appWindow.id),1)[0];    
    var newZIndexList = [foucesedWindow,...zIndexList];
    zIndexList = newZIndexList;
    for(i=0;i<zIndexList.length;i++){
        var appWindow = document.getElementById(zIndexList[i]);
        appWindow.style.zIndex = 200 + (zIndexList.length - i);
    }
    console.log(zIndexList);
}