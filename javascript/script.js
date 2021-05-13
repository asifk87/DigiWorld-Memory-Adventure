console.log("testing if this is connected");
// Important Elements on site
let gameBoard = document.querySelector('#game-board')
let currentScore = document.querySelector('#score')
let manyMoves = document.querySelector('#moves')
let cards = document.querySelectorAll('.digi-card')
let newGame = document.querySelector('#new-game')

// array for cards in players hand
var player1Hand = []
var displayHand = []
// standard sets
let moves =  0
let scores = 0
let internalTimer = 3000

// newGame function to rearrange the board with random cards
newGame.addEventListener('click', function(){
    /* start out with empty objects for the beginnning of the game */
    // emptying the open array player1Hand
    player1Hand = []
    // emptying out the innerHTML - doesn't seem to need it though
    gameBoard.innerHTML = ''
    
    // resetting the scores and the moves in the new game
    moves = 0
    scores = 0

    /* below creates new li list with html we need. since we're working with list on screen not making it */
    // const unshuffledDeck = []
    // // gameBoard.innerText = a function that would return 5 pairs of cards randomly interspaced 
    // for (let index = 0; index < 5; index++) {
    //     let newLi = document.createElement('li')
    //     newLi.className = 'digi-card'
    //     newLi.innerText = (`${index} This is a number`)
    //     // newLi.addEventListener('click', comparison)
    //     let cloneNewLi = newLi.cloneNode(true)
    //     unshuffledDeck.push(newLi)
    //     unshuffledDeck.push(cloneNewLi)
    //     // below will append newLi to the board
    //     // gameBoard.append(newLi);
    // }

    /* bring each of the list itmes from cards elements into a unshuffled array */
    let unshuffledDeck = []

    for (let index = 0; index < cards.length; index++) {
        unshuffledDeck.push(cards[index])
    }
    /*     randomize the cards that enter into array */
    let digiDestined = []

    const num = unshuffledDeck.length
    for (let i = 0; i < num; i++) {
        // console.log(`${i} time running loop`);
        // console.log(`${unshuffledDeck.length} left in the array`);
        let rdomInd = Math.floor(Math.random() * unshuffledDeck.length)
        // console.log(rdomInd);
        let selected = unshuffledDeck[rdomInd]
        // remove from array the index we already inerted
        unshuffledDeck.splice(rdomInd,1)
        // added a click comparsion to each array we're slecting 
        // selected.addEventListener('click', comparison)
        /* adding hidden class list to first child */
        selected.firstChild.className ='hidden'
        selected.classList.remove('prevent')
        /* pushing the new array */
        digiDestined.push(selected)
        // console.log(digiDestined);
    }
    /* This appends each of the list items to the unordered list */
    for (let j = 0; j < digiDestined.length; j++) {
        gameBoard.appendChild(digiDestined[j]);
    }
})

// we need a way to display cards
function displayCard() {
    console.log(this);
    displayHand.push(this)
    let inHand = displayHand.length
    if (inHand == 2) {
        console.log("running inner hand displayCard");
        offDisplay()
        setTimeout(function(){
            onDisplay()        
        },internalTimer)
    } else {
        console.log("this didn't work for some reason");
    }

    // this represents the 'click' event listener we placed on the li's
    this.firstChild.classList.toggle('hidden')
    this.classList.add('prevent')

}

// comparsion function, compare two values within an array
/* player1Hand array was here */

function comparison() {
    player1Hand.push(this)
    console.log("comparison function is run");
    console.log(player1Hand);
    let inHand = player1Hand.length;
    if (inHand == 2) {
        if(player1Hand[0].type == player1Hand[1].type){
            movesIncrease()
            scoresIncrease()
            matched()

        } else {
            movesIncrease()
            unMatched()
        }
    }
}
//trying to undress code to make it simpler to read
function onDisplay(){
    console.log("onDisplay is run");
    let displayArray = Array.from(cards)
    displayArray.forEach(function(node){
        node.classList.remove('prevent');
    })
}
function offDisplay(){
    console.log("offDisplay is run");
    let displayArray = Array.from(cards)
    displayArray.forEach(function(node){
        node.classList.add('prevent');
    })
}

function matched(){
    console.log("match function - this is a match");
    console.log(player1Hand[0]);
    player1Hand[0].firstChild.classList.remove('hidden')
    player1Hand[1].firstChild.classList.remove('hidden')
    console.log(player1Hand[0]);
    player1Hand = []
}
function unMatched(){
    console.log("unMatched function -this isn't a match + adds hidden, removes prevent");
    offDisplay()
    setTimeout( function() {
        console.log('unMatched timeOut Function to add hidden and remove prevent');
        console.log(player1Hand);
        player1Hand[0].firstChild.classList.add('hidden')
        player1Hand[1].firstChild.classList.add('hidden')
        onDisplay()
        
        player1Hand = []
    },internalTimer)
}
function movesIncrease(){
    moves +=1
    manyMoves.innerHTML = moves
}
function scoresIncrease(){
    scores +=1
    currentScore.innerHTML = scores
}

// Add click feature on each of the 'cards' 
for (let i = 0; i < cards.length; i++) {
    card = cards[i]
    // cards[i].addEventListener('click', function() {
    //     console.log(cards[i].innerHTML);
    // } )
    card.addEventListener('click',displayCard)
    card.addEventListener('click', comparison)
}