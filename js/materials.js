var StockpillData = {
    wood: 0,
    coal: 0,
    iron: 0,
    steel: 0,
    sand: 0,
    glass: 0,
    plastic: 0,
    paper: 0,
    oil: 0,
    stone: 0,
}

function chopWood(number){
    if (PowerData.currentPower >= number) {
      StockpillData.wood += number
      PowerData.currentPower -= number
      document.getElementById("woodDisplay").style.display = "block"
      document.getElementById("getDigger").style.display = "block"
      document.getElementById("getMine").style.display = "block"
      updateText("Materials")
      updateText("Power")
    }
}

function makeSteel(number) {
  if (StockpillData.coal >= 10*number && gameData.iron >= 100*number) {
    StockpillData.steel += number
    StockpillData.coal -= 10*number
    StockpillData.iron -= 100*number
    document.getElementById("getPump").style.display = "block"
    document.getElementById("steelDisplay").style.display = "block"
    updateText("Materials")
  }
}

function makeGlass(number) {
  if (StockpillData.sand >= 10*number) {
    StockpillData.glass += number
    StockpillData.sand -= 10*number
    document.getElementById("glassDisplay").style.display = "block"
    updateText("Materials")
  }
}

function makePlastic(number) {
  if (StockpillData.oil >= 10*number) {
    StockpillData.plastic += number
    StockpillData.oil -= 10*number
    document.getElementById("plasticDisplay").style.display = "block"
    updateText("Materials")
  }
}
