var controlMenu = document.getElementById("controlMenu")
var controlMenu_button = document.getElementById("controlMenu-button")
var volumeRange_input = document.getElementById("volumeRange-input")
var volumeRange_icon = document.getElementById("volumeRange-icon")



// volume range icon
function checkTheVolumeRange() {
    var value = volumeRange_input.value;
    switch (true) {
        case value > 50:
            return "volume_up";
        case value > 0 && value <= 50:
            return "volume_down";
        default:
            return "volume_mute";
    }
}

volumeRange_input.addEventListener("input",() => {
    volumeRange_icon.setAttribute("src",`./assets/system-icons/${checkTheVolumeRange()}.svg`)
    volumeRange_input.title = volumeRange_input.value + "%";
})

// wifi icon
var wifiToggle_button = document.getElementById("wifiToggle-button");
var wifi_icon = document.getElementById("wifi-icon");

wifiToggle_button.addEventListener("change", () => {
    if (wifiToggle_button.checked) {
        wifi_icon.setAttribute("src", "./assets/system-icons/wifi.svg");
        newNotification("Wi-Fi is turned on", "You can manage your Wi-Fi connections from the control menu.", "wifi.svg");
    } else {
        wifi_icon.setAttribute("src", "./assets/system-icons/wifi_off.svg");
        newNotification("Wi-Fi is turned off", "You can turn it on again from the control menu.", "wifi_off.svg");
    }
});

// bluetooth icon
var bluetoothToggle_button = document.getElementById("bluetoothToggle-button");
var bluetooth_icon = document.getElementById("bluetooth-icon");

bluetoothToggle_button.addEventListener("change", () => {
    if (bluetoothToggle_button.checked) {
        bluetooth_icon.setAttribute("src", "./assets/system-icons/bluetooth.svg");
    } else {
        bluetooth_icon.setAttribute("src", "./assets/system-icons/bluetooth_off.svg");
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