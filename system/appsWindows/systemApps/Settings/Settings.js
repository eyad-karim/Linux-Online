var Settings_taskbarOpenButton = document.getElementById("Settings-taskbarOpenButton")
Settings_taskbarOpenButton.addEventListener("click", () => {
    openSettings()
})
openSettings()
function openSettings() {
    var TheApp = newAppWindow("Settings")
    document.getElementById(`${TheApp.id}-body`).innerHTML = `
        <ul class="Settings-menu">
            <h2>Set things</h2>
            <li class="settings-section-button" id="system-${TheApp.id}-section-button">System</li>
            <li class="settings-section-button" id="personalization-${TheApp.id}-section-button">Personalization</li>
            <li class="settings-section-button" id="apps-${TheApp.id}-section-button">Apps</li>
            <li class="settings-section-button" id="accounts-${TheApp.id}-section-button">Accounts</li>
            <li class="settings-section-button" id="timeandlanguage-${TheApp.id}-section-button">Time & Language</li>
            <li class="settings-section-button" id="gaming-${TheApp.id}-section-button">Gaming</li>
            <li class="settings-section-button" id="accessibility-${TheApp.id}-section-button">Accessibility</li>
            <li class="settings-section-button" id="privacy-${TheApp.id}-section-button">Privacy</li>
            <li class="settings-section-button" id="updateandsecurity-${TheApp.id}-section-button">Update & Security</li>
        </ul>
        <div class="Settings-content">
            <h1 style="text-align:center;">Set things up</h1>
            <div style="display:none;" class="settings-section" id="system-${TheApp.id}-section">
                <h2>System</h2>
                <p>Here you can change your system settings</p>
            </div>
            <div style="display:none;" class="settings-section" id="personalization-${TheApp.id}-section">
                <h2>Personalization</h2>
                <h3>Background</h3>
                <div class="cards-column">
                    <div class="card">
                        Choose Your solid color background
                        <label class="input-type-color" for="system-background-color-input-${TheApp.id}">Choose a color</label>
                        <input type="color" id="system-background-color-input-${TheApp.id}">
                    </div>
                    <div class="card">
                        Choose Your own background
                        <label class="input-type-file" for="system-background-image-input-${TheApp.id}">Choose a background</label>
                        <input type="file" id="system-background-image-input-${TheApp.id}" accept="image/*">
                        Last backgrounds
                        <div id="${TheApp.id}-lastBackgrounds" class="cards-row lastBackgrounds">
                        </div>
                    </div>
                    <div class="card">
                        Create your own theme
                    </div>
                </div>
            </div>
            <div style="display:none;" class="settings-section" id="apps-${TheApp.id}-section">
                <h2>Apps</h2>
                <p>Here you can change your apps settings</p>
            </div>
            <div style="display:none;" class="settings-section" id="accounts-${TheApp.id}-section">
                <h2>Accounts</h2>
                <p>Here you can change your accounts settings</p>
            </div>
            <div style="display:none;" class="settings-section" id="timeandlanguage-${TheApp.id}-section">
                <h2>Time & Language</h2>
                <p>Here you can change your time & language settings</p>
            </div>
            <div style="display:none;" class="settings-section" id="gaming-${TheApp.id}-section">
                <h2>Gaming</h2>
                <p>Here you can change your gaming settings</p>
            </div>
            <div style="display:none;" class="settings-section" id="accessibility-${TheApp.id}-section">
                <h2>Accessibility</h2>
                <p>Here you can change your accessibility settings</p>
            </div>
            <div style="display:none;" class="settings-section" id="privacy-${TheApp.id}-section">
                <h2>Privacy</h2>
                <p>Here you can change your privacy settings</p>
            </div>
            <div style="display:none;" class="settings-section" id="updateandsecurity-${TheApp.id}-section">
                <h2>Update & Security</h2>
                <p>Here you can change your update & security settings</p>
            </div>
        </div>   
    `
    // Settings sections
    document.querySelectorAll(".settings-section-button").forEach((button) => {
        button.addEventListener("click", () => {
            
            var sectionsSelector = `#${button.id.split("-")[1] + "-appWindow"} .settings-section`;
            document.querySelectorAll(`${sectionsSelector}`).forEach((section) => {
                section.style.display = "none"
            })
            document.getElementById(button.id.replace("-button", "")).style.display = "block"
        })
    })
    // Background

    var system_background_file_input = document.getElementById(`system-background-image-input-${TheApp.id}`)
    system_background_file_input.addEventListener("change", () => {
        var file = system_background_file_input.files[0]        
        var reader = new FileReader()
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
            addNewLastBackground(e.target.result)
        }
        reader.readAsDataURL(file)
    })

    function addNewLastBackground(backgroundPath) {
        var container = document.getElementById(`${TheApp.id}-lastBackgrounds`)
        var card = document.createElement("div")
        card.classList.add("card")
        card.style.background = `url('${backgroundPath}') no-repeat center center`
        card.style.backgroundSize = "cover"
        card.style.width = "150px"
        card.style.height = "100px"
        container.appendChild(card)
        card.addEventListener("click",()=>{
            document.body.style.background = `url('${backgroundPath}') no-repeat center center`
            document.body.style.backgroundSize = "cover"
        })
    }
    
    addNewLastBackground("./assets/system-wallpapers/sunflowers.jpg")
    addNewLastBackground("./assets/system-wallpapers/leafs.jpg")
    addNewLastBackground("./assets/system-wallpapers/redtrees.jpg")
    addNewLastBackground("./assets/system-wallpapers/trainroad.jpg")

    var system_background_color_input = document.getElementById(`system-background-color-input-${TheApp.id}`)
    system_background_color_input.addEventListener("change", () => {
        document.body.style.backgroundImage = `url(bta3)`
        document.body.style.backgroundColor = system_background_color_input.value;
    })
}