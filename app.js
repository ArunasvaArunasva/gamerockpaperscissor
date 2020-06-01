    //get all the elements,  querySelector picks first elem of that class;
//.name for class, "name" for id;
//step called CACHING the Dom
const userScore = 0;
const computerScore = 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div= document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
                //functional code
//event listener method first element is any type of DOM event see W3
//second is the function, 3rd parameter is a boolean value its optional

    //fx to get userchoice
function game(userChoice) 
{

}

function getComputerChoice()
{
    const choices = ['r','p','s'];//elems same as id, get random option using math
    console.log(Math.random());
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

main();
