var Settings_taskbarOpenButton = document.getElementById("Settings-taskbarOpenButton")
Settings_taskbarOpenButton.addEventListener("click", () => {
    openSettings()
})
var lastBackgroundsList = ["assets/system-wallpapers/sunflowers.jpg","assets/system-wallpapers/leafs.jpg","assets/system-wallpapers/redtrees.jpg","assets/system-wallpapers/trainroad.jpg"]
// openSettings()


function openSettings() {
    var TheApp = newwindow("Settings")
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
            <h1 style="text-align:center;">Set things</h1>
            <div style="display:none;" class="settings-section" id="system-${TheApp.id}-section">
                <h2>System</h2>
                <p>Here you can change your system settings</p>
            </div>
            <div style="display:none;" class="settings-section" id="personalization-${TheApp.id}-section">
                <h2>Personalization</h2>
                <div class="cards-column">
                    <h3>Background</h3>
                    <div class="card">
                        <header>
                            Choose Your own background
                            <div style="flex-grow:1"></div>
                            <label class="input-type-file" for="system-background-image-input-${TheApp.id}">Upload a background</label>
                            <input type="file" id="system-background-image-input-${TheApp.id}" accept="image/*">
                            <label class="input-type-color" for="system-background-color-input-${TheApp.id}">Choose a solid color</label>
                            <input type="color" id="system-background-color-input-${TheApp.id}">
                        </header>
                        <div id="${TheApp.id}-lastBackgrounds" class="cards-row lastBackgrounds">
                        </div>
                    </div>
                </div>
                <hr>
                <h3>Themes</h3>
                <div class="cards-column">
                    <div class="card">
                        <header>Choose a theme</header>
                        <div class="cards-row" style="justify-content:space-between;flex-wrap:wrap">
                            <label for="themeToggle-button-${TheApp.id}" style="display: flex;flex-direction:row;align-items:center;gap:10px">
                                <img src="./assets/system-icons/mode.svg" alt="svg icon">
                                <span>Light/Dark mode</span>
                            </label>
                            <input type="checkbox" checked id="themeToggle-button-${TheApp.id}" class="toggle-input">
                        </div>
                    </div>
                    <div class="card">
                        <header>Create Your Theme</header>
                        <div class="cards-row" style="justify-content:space-between;padding:10px 0">
                            Primary Color:
                            <div>
                                <label class="input-type-color" for="system-theme-primary-color-input-${TheApp.id}">Choose a color</label>
                                <input type="color" id="system-theme-primary-color-input-${TheApp.id}">
                            </div>
                        </div>
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
            
            var sectionsSelector = `#${button.id.split("-")[1] + "-window"} .settings-section`;
            document.querySelectorAll(`${sectionsSelector}`).forEach((section) => {
                section.style.display = "none"
            })
            document.getElementById(button.id.replace("-button", "")).style.display = "flex"
        })
    })
    
    // Background settings
    var system_background_file_input = document.getElementById(`system-background-image-input-${TheApp.id}`)
    system_background_file_input.addEventListener("change", () => {
        var file = system_background_file_input.files[0]        
        var reader = new FileReader()
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url(${e.target.result})`;
            addNewLastBackground(e.target.result)
            lastBackgroundsList.push(e.target.result)
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
    lastBackgroundsList.forEach(background => {
        addNewLastBackground(background)
    })
    

    var system_background_color_input = document.getElementById(`system-background-color-input-${TheApp.id}`)
    system_background_color_input.addEventListener("input", () => {
        document.body.style.backgroundImage = `url(bta3)`
        document.body.style.backgroundColor = system_background_color_input.value;
    })

    // Themes
    var themeToggle_button = document.getElementById("themeToggle-button-"+TheApp.id);
    themeToggle_button.addEventListener("click", () => {
        if (themeToggle_button.checked) {
            document.body.setAttribute("theme", "dark");
        } else {
            document.body.setAttribute("theme", "light");
        }
    })

    //Custom Theme
    var system_theme_primary_color_input = document.getElementById(`system-theme-primary-color-input-${TheApp.id}`)
    system_theme_primary_color_input.addEventListener("input", () => {
        document.body.style.setProperty("--primary", system_theme_primary_color_input.value);
    })
}