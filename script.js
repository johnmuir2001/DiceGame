let dice1 = document.getElementById("dice")
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
        dice1.style.transform = "translateZ(-100px) rotateY(0deg)"
        score = 0
        score1.textContent = score
    } else if(num === 2){
        dice1.style.transform = "translateZ(-100px) rotateY(90deg)"
        score += 2
        score1.textContent = score
    } else if(num === 3){
        dice1.style.transform = "translateZ(-100px) rotateX(-90deg)"
        score += 3
        score1.textContent = score
    } else if(num === 4){
        dice1.style.transform = "translateZ(-100px) rotateX(90deg)"
        score += 4
        score1.textContent = score
    } else if(num === 5){
        dice1.style.transform = "translateZ(-100px) rotateY(-90deg)"
        score += 5
        score1.textContent = score
    } else if(num === 6){
        dice1.style.transform = "translateZ(-100px) rotateY(-180deg)"
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