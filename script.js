
let start = document.querySelector('#start-el');
let startBtn = document.querySelector('#start-game-btn');
// let playAgain = document.querySelector('#play-Again-btn');
let firstDice;
let secondDice;
let bothDice;

startBtn.addEventListener("click", () =>{
    firstDice = Math.floor(Math.random()*6);
    secondDice = Math.floor(Math.random()*6);

    let diceOne;
    if (firstDice === 0){
        diceOne = 1;
    }else if(firstDice === 1){
        diceOne = 2;
    }else if(firstDice === 2){
        diceOne = 3;
    }else if(firstDice === 3){
        diceOne = 4;
    }else if(firstDice === 4){
        diceOne = 5;
    }else{
        diceOne = 6;
    };

    let diceTwo;
    if (secondDice === 0){
        diceTwo = 1;
    }else if(secondDice === 1){
        diceTwo = 2;
    }else if(secondDice === 2){
        diceTwo = 3;
    }else if(secondDice === 3){
        diceTwo = 4;
    }else if(secondDice === 4){
        diceTwo = 5;
    }else{
        diceTwo = 6;
    };


    bothDice =  "you,ve got " + diceOne +" and " + diceTwo;

    start.textContent = bothDice

    console.log(bothDice)
});










