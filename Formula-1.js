// list of Formula 1 champions since the year 2000
const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
]
let winners = {}

function countWin(driver) {
    // if (winners.hasOwnProperty(driver)){return winners[driver]++}
    // console.log(winners[driver])
    if (!(winners.hasOwnProperty(driver))){return winners[driver]=1}
    else if (winners.hasOwnProperty(driver)){return winners[driver]++}
    
}

formula1Champions.forEach(countWin)
console.log(winners)