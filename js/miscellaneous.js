var MiscellaneousData = {
    numberFormat: 2,
    gameTicks: 0,
    gameSpeed: 50,
    mediamLoopTime: 10,
    slowLoopTime: 25,
    toBeDisplayed: "",
    displayNumber: 0,
    display: "",
    stringCHR: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        " ", "-", "+", "/", ".", "(", ")", "[", "]", ":", "?", "!", "%", "~", "μ", "Δ", "∇"
    ],
    randomDigitsLen: 8,
    displayID: "",
}

function startMessage() {
    switch (MiscellaneousData.gameTicks) {
        default:
            break;
        case 0:
            MiscellaneousData.toBeDisplayed = "wellcom comander"
            break;
        case 100:
            MiscellaneousData.toBeDisplayed = "error power failing"
            break;
        case 200:
            MiscellaneousData.toBeDisplayed = "rebooting system"
            break;
        case 300:
            MiscellaneousData.toBeDisplayed = "rebooting failed"
            break;
        case 400:
            MiscellaneousData.toBeDisplayed = "manual restart needed"
            break;
        case 500:
            MiscellaneousData.toBeDisplayed = "spin turbine"
            break;
        case 600:
            DisplayData.energyDisplayNixiePart = 1
            displayMaterial("energy", DisplayData.energyDisplayNixiePart)
            break;
        case 630:
            TabData.energyTabAccess = 1
            document.getElementById("tab_button_1").src = "Assets/Button_Tabs_Center.png"
            document.getElementById("tab_text_1").style.visibility = "visible"
            TabData.setingsTabAccess = 1
            document.getElementById("tab_button_9").src = "Assets/Button_Tabs_Center.png"
            document.getElementById("tab_text_9").style.visibility = "visible"
            break;
    }
}

function formatNumber(number, numberLength = MiscellaneousData.numberFormat) {
    if (number > 5000000000000000000000000000000) {
        number /= 1000000000000000000000000000000
        number = number.toFixed(numberLength)
        number = number + "Q"
    } else if (number > 5000000000000000000000000000) {
        number /= 1000000000000000000000000000
        number = number.toFixed(numberLength)
        number = number + "R"
    } else if (number > 5000000000000000000000000) {
        number /= 1000000000000000000000000
        number = number.toFixed(numberLength)
        number = number + "Y"
    } else if (number > 5000000000000000000000) {
        number /= 1000000000000000000000
        number = number.toFixed(numberLength)
        number = number + "Z"
    } else if (number > 5000000000000000000) {
        number /= 1000000000000000000
        number = number.toFixed(numberLength)
        number = number + "E"
    } else if (number > 5000000000000000) {
        number /= 1000000000000000
        number = number.toFixed(numberLength)
        number = number + "P"
    } else if (number > 5000000000000) {
        number /= 1000000000000
        number = number.toFixed(numberLength)
        number = number + "T"
    } else if (number > 5000000000) {
        number /= 1000000000
        number = number.toFixed(numberLength)
        number = number + "G"
    } else if (number > 5000000) {
        number /= 1000000
        number = number.toFixed(numberLength)
        number = number + "M"
    } else if (number > 5000) {
        number /= 1000
        number = number.toFixed(numberLength)
        number = number + "K"
    } else {
        number = number.toFixed(numberLength)
    }
    return number
}

function PerSecond(material) {
    switch (material) {
        default:
            break;
        case "energy":
            return TurbineData.generatorEfficency * (TurbineData.turbineSpeed / 1000) / (MiscellaneousData.gameSpeed / 1000) * MiscellaneousData.mediamLoopTime
        case "wood":
            Pass
            break;
    }
}
