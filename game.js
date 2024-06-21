let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawgame = () => {
    //console.log("GAME WAS DRAW");
    msg.innerText = "game draw !";
    msg.style.background = "black";
    msg.style.color = "white";
};

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const showwinner = ( userwin ) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore ;
        //console.log("you win");
        msg.innerText = "you win !";
        //msg.innerText = `you win ! you ${userchoice} beats ${compchoice}`;
        msg.style.background = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore ;
        //console.log("you lose");
        msg.innerText = "you lose !";
        //msg.innerText = `you lose! comp ${compchoice} beats ${userchoice}`;
        msg.style.background = "red";
    }
};

const playgame = (userchoice) => {
    //console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    //console.log("comp choice = ",compchoice);

    if(userchoice === compchoice)
    {
        drawgame();
    } 
    else
    {
        let userwin = true;
        if(userchoice ==="rock"){
            userwin = compchoice ==="paper" ? false : true;
        } else if (userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true ;
        } else {
            compchoice === "rock" ? false : true ;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => 
{
    choice.addEventListener("click",() =>
    {
        const userchoice = choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});