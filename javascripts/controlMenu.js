controlMenu = document.getElementById("controlMenu") // don't put let in front of this because it's already declared
controlMenu_button = document.getElementById("controlMenu-button") // don't put let in front of this because it's already declared
let volumeRange_input = document.getElementById("volumeRange-input")
let volumeRange_icon = document.getElementById("volumeRange-icon")

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


let wifiToggle_button = document.getElementById("wifiToggle-button");
let wifi_icon = document.getElementById("wifi-icon");

wifiToggle_button.addEventListener("change", () => {
    if (wifiToggle_button.checked) {
        wifi_icon.setAttribute("src", "./images/icons/wifi.svg");
    } else {
        wifi_icon.setAttribute("src", "./images/icons/wifi_off.svg");
    }
});

let bluetoothToggle_button = document.getElementById("bluetoothToggle-button");
let bluetooth_icon = document.getElementById("bluetooth-icon");

bluetoothToggle_button.addEventListener("change", () => {
    if (bluetoothToggle_button.checked) {
        bluetooth_icon.setAttribute("src", "./images/icons/bluetooth.svg");
    } else {
        bluetooth_icon.setAttribute("src", "./images/icons/bluetooth_off.svg");
    }
});