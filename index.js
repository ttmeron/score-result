
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let result = 0
let guestResult = 0

function addOne(){
    result += 1
    homeScore.textContent = result
}
function addTwo(){
    result += 2
    homeScore.textContent = result
}
function addThree(){
    result += 3
    homeScore.textContent = result
}
function addOneGuest(){
    guestResult += 1
    guestScore.textContent = guestResult
}
function addTwoGuest(){
    guestResult += 2
    guestScore.textContent = guestResult
}
function addThreeGuest(){
    guestResult += 3
    guestScore.textContent = guestResult
}