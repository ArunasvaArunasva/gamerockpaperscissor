    //get all the elements,  querySelector picks first elem of that class;
//.name for class, "name" for id;
//step called CACHING the Dom
let userScore = 0;
let computerScore = 0;
const userScore_span= document.getElementById("user-score");
let computerScore_span=document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let messageResult = document.getElementById("resultMessage")
    let resetBtn = document.getElementById("btn");
                //functional code
//event listener method first element is any type of DOM event see W3
//second is the function, 3rd parameter is a boolean value its optional

    function converToWord(letter) {
        if(letter=="r") return "Rock";
        if(letter=="s") return "Scissors";
        return "Paper";

    }
    function win(userChoice,computerChoice) {//win game
     userScore++;
     userScore_span.innerHTML=userScore;
     computerScore_span.innerHTML=computerScore;
     const userWord = "(user)".fontsize(3);
     const compWord = "(comp)".fontsize(3);
     result_p.innerHTML = converToWord(userChoice) +userWord+ " beats "+ converToWord(computerChoice) +compWord+ " You win 😎";
    }
    function lose(userChoice,computerChoice){//draw game
        computerScore++;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        const userWord = "(user)".fontsize(3);
        const compWord = "(comp)".fontsize(3);
        result_p.innerHTML = converToWord(computerChoice) +compWord+ " beats "+ converToWord(userChoice) +userWord+ " You lose 😭";
    }
    function  draw(userChoice,computerChoice){//lose game
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        const userWord = "(user)".fontsize(3);
        const compWord = "(comp)".fontsize(3);
        result_p.innerHTML = converToWord(userChoice) + userWord + " same as "+ converToWord(computerChoice) +compWord+ " It's a Draw 😮";

    }

    //fx to get userchoice
function game(userChoice)
{
    const computerChoice = getComputerChoice();
    const name="pine";
    switch (userChoice + computerChoice) {
        case"rs":
        case"pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case"ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case"rr":
        case"pp":
        case "ss":
           draw(userChoice,computerChoice);
            break;
    }

}

function resetScore() {
    userScore=0;
    computerScore=0;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML="";
}

//array containing id name of choice
    // on click it generates random no. returns id name of that index
function getComputerChoice()
{
    const choices = ['r','p','s'];//elems same as id, get random option using math
   const randomNumber = (Math.floor(Math.random()*3));
   return choices[randomNumber];
}

function main()
{
    rock_div.addEventListener('click',function () {
        game("r");
    })
    paper_div.addEventListener('click',function () {
        game("p");
    })
    scissors_div.addEventListener('click',function () {
        game("s");
    })

}

    resetBtn.addEventListener('click',function () {
        resetScore();
    })


main();
