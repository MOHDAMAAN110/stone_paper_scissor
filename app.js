let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");

const compScorePara=document.querySelector("#comp-score");

const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
   const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
    // rock,paper,scissors
};

const drawGame = () => {
    
    msg.innerText = "Match drawn";
    msg.style.backgroundColor="yellow";
};

const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerText =  `You lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        
    }
};


const pleyGame=(userChoice)=>{
    
    // Generate Computer Choice -> modular
    const compChoice =genCompChoice();
    

    if(userChoice === compChoice){
        // Draw game
        drawGame();
    } else {
        let userWin =true;
        if(userChoice ==="rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock, scissors
            userWin= compChoice === "scissors" ? false :true;
        } else {
            // rock,paper
            userWin = compChoice ==="rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        pleyGame(userChoice);

    });
});