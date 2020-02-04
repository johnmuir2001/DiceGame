let dice = document.getElementById("dice")
let score1 = document.getElementById("score")
let count1 = document.getElementById("count")
let win1 = document.getElementById("win")

let score = 0
let count = 0
let win = 0

document.getElementById("button").addEventListener("click", () => {
    let num = Math.ceil(Math.random()*6)
    count++
    count1.textContent = count
    if(num === 1){
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png"
        score = 0
        score1.textContent = score
    } else if(num === 2){
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png"
        score += 2
        score1.textContent = score
    } else if(num === 3){
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png"
        score += 3
        score1.textContent = score
    } else if(num === 4){
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png"
        score += 4
        score1.textContent = score
    } else if(num === 5){
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png"
        score += 5
        score1.textContent = score
    } else if(num === 6){
        dice.src = "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"
        score += 6
        score1.textContent = score
    }

    if(score >= 21){
        win++
        win1.textContent = win
        score1.textContent = "YOU WON"
        score = 0
        count = 0
    }
})