let dice1 = document.getElementById("dice")

let score1 = document.getElementById("score")
let count1 = document.getElementById("count")
let win1 = document.getElementById("win")

let score2 = document.getElementById("score2")
let count2 = document.getElementById("count2")
let win2 = document.getElementById("win2")

let title = document.getElementsByClassName("title")[0] 
let title1 = document.getElementsByClassName("title1")[0]
let player2Button = document.getElementById("2player")
let player1 = document.getElementsByClassName("player1")[0]
let player2 = document.getElementsByClassName("player2")[0]
let button2 = document.getElementById("button2")
let button = document.getElementById("button")
let startOver = document.getElementById("startOver")

let score = 0
let count = 0
let win = 0

let p2score = 0
let p2count = 0
let p2win = 0

button.addEventListener("click", () => {
    let num = Math.ceil(Math.random()*6)
    count++
    count1.textContent = count
    if(player2.style.display === "block"){
        player2.style.backgroundColor = "#d2fcf6"
        player1.style.backgroundColor = "#e6e6e6"
        button2.style.display = "block"
        button.style.display = "none"
    }
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
        p2score = 0
        score = 0
        p2count = 0
        count = 0
    }
})

button2.addEventListener("click", () => {
    let num = Math.ceil(Math.random()*6)
    p2count++
    count2.textContent = p2count
    player1.style.backgroundColor = "#d2fcf6"
    player2.style.backgroundColor = "#e6e6e6"
    button2.style.display = "none"
    button.style.display = "block"
    if(num === 1){
        dice1.style.transform = "translateZ(-100px) rotateY(0deg)"
        p2score = 0
        score2.textContent = p2score
    } else if(num === 2){
        dice1.style.transform = "translateZ(-100px) rotateY(90deg)"
        p2score += 2
        score2.textContent = p2score
    } else if(num === 3){
        dice1.style.transform = "translateZ(-100px) rotateX(-90deg)"
        p2score += 3
        score2.textContent = p2score
    } else if(num === 4){
        dice1.style.transform = "translateZ(-100px) rotateX(90deg)"
        p2score += 4
        score2.textContent = p2score
    } else if(num === 5){
        dice1.style.transform = "translateZ(-100px) rotateY(-90deg)"
        p2score += 5
        score2.textContent = p2score
    } else if(num === 6){
        dice1.style.transform = "translateZ(-100px) rotateY(-180deg)"
        p2score += 6
        score2.textContent = p2score
    }

    if(p2score >= 21){
        p2win++
        win2.textContent = p2win
        score2.textContent = "YOU WON"
        p2score = 0
        score = 0
        p2count = 0
        count = 0
    }
})

player2Button.addEventListener("click", () => {
    player2.style.display = "block";
    player2Button.style.display = "none";
    title.style.display = "block";
    title1.style.display = "block";
    score = 0
    score1.textContent = score
    count = 0
    count1.textContent = count
    win = 0
    win1.textContent = win
})

startOver.addEventListener("click", () => {
    player2.style.display = "none";
    player1.style.backgroundColor = "#d2fcf6"
    player2Button.style.display = "block";
    button.style.display = "block"
    dice1.style.transform = "translateZ(-100px) rotateX(-45deg) rotateY(-45deg)"
    score = 0
    score1.textContent = score
    count = 0
    count1.textContent = count
    win = 0
    win1.textContent = win

    p2score = 0
    score2.textContent = score
    p2count = 0
    count2.textContent = count
    p2win = 0
    win2.textContent = win
})