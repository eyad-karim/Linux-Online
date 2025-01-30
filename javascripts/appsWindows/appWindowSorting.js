var zIndexList = []
addEachAppWindowToZIndexList()

function addSortingForEachAppWindow(appWindowID) {
    if (appWindowID) {
        document.getElementById(appWindowID).addEventListener('mousedown',() => {
            sortInFront(document.getElementById(appWindowID))
        })
    } else {
        appsWindows = document.querySelectorAll(".appWindow")
        appsWindows.forEach((appWindow) => {
            appWindow.addEventListener('mousedown',() => {
                sortInFront(appWindow)
            })
        })
    }
}
addSortingForEachAppWindow()
function addEachAppWindowToZIndexList(appWindowID) {
    if (appWindowID) {
        zIndexList[zIndexList.length] = appWindowID
    } else {
        appsWindows = document.querySelectorAll(".appWindow")
        appsWindows.forEach((appWindow) => {
            zIndexList[zIndexList.length] = appWindow.id
        })
    }
}


function sortInFront(appWindow) {
    var foucesedWindow = zIndexList.splice(zIndexList.indexOf(appWindow.id),1)[0];    
    var newZIndexList = [foucesedWindow,...zIndexList];
    zIndexList = newZIndexList;
    for(i=0;i<zIndexList.length;i++){
        var appWindow = document.getElementById(zIndexList[i]);
        appWindow.style.zIndex = 100 + (zIndexList.length - i);
    }
    console.log(zIndexList);
}