
let zIndexList = []
addEachAppWindowToZIndexList()

function addSortingForEachAppWindow() {
    appsWindows.forEach((appWindow) => {
        appWindow.addEventListener('mousedown',() => {
            sortInFront(appWindow)
        })
    })
}
addSortingForEachAppWindow()
function addEachAppWindowToZIndexList() {
    zIndexList = []
    appsWindows.forEach((appWindow) => {
        zIndexList[zIndexList.length] = appWindow.id
    })
}


function sortInFront(appWindow) {
    let foucesedWindow = zIndexList.splice(zIndexList.indexOf(appWindow.id),1)[0];    
    let newZIndexList = [foucesedWindow,...zIndexList];
    zIndexList = newZIndexList;
    for(i=0;i<zIndexList.length;i++){
        let appWindow = document.getElementById(zIndexList[i]);
        appWindow.style.zIndex = 100 + (zIndexList.length - i);
    }
    console.log(zIndexList);
    
}