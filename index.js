let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock , paper , scissors
    const option = ["rock" , "paper","scissors"];
    const randomIndx = Math.floor(Math.random()*3);
    return option[randomIndx];

}
const drawGame = () => {
    msg.innerText = "Game was draw, Play again"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("Win!");
        msg.innerText = `You are Winner! Yours ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You Lose ,Better Luck Next Time ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice ",userChoice)
    //Generate Computer 
    const compChoice = genCompChoice();
    console.log("Comp Choice ",compChoice);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        // rock , scissor
        userWin = compChoice === "scissor "? false : true;
    } else {
        //rock , paper
       userWin =  compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

