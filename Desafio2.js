let playerWins = 125
let playerLosses = 35
let rankingScore = 0
let playerRating = ""

function rankedResult(playerWins, playerLosses) {
return playerWins - playerLosses
}

function classifyPlayer(result) {
    if (result <= 10) {
        return "Ferro"
    } else if (result >= 11 && result <= 20) {
        return "Bronze"
    } else if (result >= 21 && result <= 50) {
        return "Prata"
    } else if (result >= 51 && result <= 80) {
        return "Ouro"
    } else if (result >= 81 && result <= 90) {
        return "Diamante"
    } else if (result >= 91 && result <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

rankingScore = rankedResult(playerWins, playerLosses)
playerRating = classifyPlayer(rankingScore)

let message = `O Herói tem de saldo de **${rankingScore}** está no nível de **${playerRating}**`

console.log(message)
