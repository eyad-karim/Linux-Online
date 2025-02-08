var controlMenu = document.getElementById("controlMenu")
var controlMenu_button = document.getElementById("controlMenu-button")
var volumeRange_input = document.getElementById("volumeRange-input")
var volumeRange_icon = document.getElementById("volumeRange-icon")

// volume range icon
function checkTheVolumeRange() {
    if (volumeRange_input.value >= 66 ) {
        return "volume_up"
    } else if (volumeRange_input.value >= 33 && volumeRange_input.value < 66) {
        return "volume_down"
    } else {
        return "volume_mute"
    }
}

volumeRange_input.addEventListener("mousemove",() => {
    volumeRange_icon.setAttribute("src",`./images/icons/${checkTheVolumeRange()}.svg`)
})

// wifi icon
var wifiToggle_button = document.getElementById("wifiToggle-button");
var wifi_icon = document.getElementById("wifi-icon");

wifiToggle_button.addEventListener("change", () => {
    if (wifiToggle_button.checked) {
        wifi_icon.setAttribute("src", "./images/icons/wifi.svg");
    } else {
        wifi_icon.setAttribute("src", "./images/icons/wifi_off.svg");
    }
});

// bluetooth icon
var bluetoothToggle_button = document.getElementById("bluetoothToggle-button");
var bluetooth_icon = document.getElementById("bluetooth-icon");

bluetoothToggle_button.addEventListener("change", () => {
    if (bluetoothToggle_button.checked) {
        bluetooth_icon.setAttribute("src", "./images/icons/bluetooth.svg");
    } else {
        bluetooth_icon.setAttribute("src", "./images/icons/bluetooth_off.svg");
    }
});

// ligth/dark mode icon
var themeToggle_button = document.getElementById("themeToggle-button");
themeToggle_button.addEventListener("click", () => {
    if (themeToggle_button.checked) {
        document.body.setAttribute("theme", "dark");
    } else {
        document.body.setAttribute("theme", "light");
    }
})