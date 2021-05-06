console.log("testing if this is connected");
// Important Elements on Website
let gameBoard = document.querySelector('#game-board')
let score = document.querySelector('#score')
let cards = document.querySelectorAll('.digi-card')
let reset = document.querySelector('#reset')


// reset function to rearrange the board with random cards
reset.addEventListener('click', function(){
    console.log(gameBoard.innerHTML)
    gameBoard.innerHTML = ''
    const array1 = []
    // gameBoard.innerText = a function that would return 5 pairs of cards randomly interspaced 
    for (let index = 0; index < 10; index++) {
        let newLi = document.createElement('li')
        newLi.className = 'digi-card'
        newLi.innerText = (`${index} This is a number`)
        array1.push(newLi)
        // below will append newLi to the board
        // gameBoard.append(newLi);
        console.log(newLi);
    }
    // console loging to see what the array is, why is the length coming up zero here?
    console.log(array1.length);
    // randomize the cards that enter into array
    let digiDestined = []
    for ( let i = 0; i < 10; i++) {
        let rdomInd = Math.floor(Math.random()*10)
        console.log(rdomInd);
        let selected = array1[rdomInd]
        // remove from array the index we already inerted *** NOT WORKING
        array1.splice(randomInd,1)
        // pushing 2 copies into into array to be applied tot he board
        digiDestined.push(selected)
        // digiDestined.push(selected)
    }
    console.log(digiDestined);
    for (let j = 0; j < digiDestined.length; j++) {
        gameBoard.append(digiDestined[j]);
    }
})

// Add click feature on each of the 'cards' 
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(event) {
        console.log(cards[i].innerText);
    } )

}