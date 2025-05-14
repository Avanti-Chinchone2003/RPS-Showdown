let userScore=0;
let compScore=0;

let userScoreDisplay=document.querySelector("#user-score")
let compScoreDisplay=document.querySelector("#comp-score")

const choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#message")
const genCompChoice=()=>
{
    //Rock ,Paper , Scissors
    let options =["Rock","Paper","Scissors"];
   const randomIdx= Math.floor(Math.random() * 3);
   return options[randomIdx];
}
const drawGame = () =>
    {
       console.log(`GAME WAS DRAW !`)
       msg.innerText="GAME DRAW !";
       msg.style.backgroundColor="#183D3D";
    }
  
const showWinner = (userWin,compChoice,userChoice) =>
{
    if(userWin)
    {
        console.log("YOU WIN !! :) ")
        msg.innerText=`YOU WIN ! :) . Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor="green"
       userScore++;
       userScoreDisplay.innerText=userScore;
    }
    else{
        console.log("You Lose :( ")
        msg.innerText=`YOU LOSE ! :( . ${userChoice} beats your ${compChoice}`;
       msg.style.backgroundColor="red"
       compScore++;
        compScoreDisplay.innerText=compScore;
    }
}
const playGame= (userChoice)=>
{
    console.log(` User Selected : ${userChoice}`)
    //Computer Choice Generation
    const compChoice=genCompChoice()
    console.log(`Computer Selected : ${compChoice}`)
    if(userChoice === compChoice){
        //Game Draw
        drawGame();
    }
    else {
        let userWin= true;
        if(userChoice==="Rock"){
            //Scissors , Paper
            userWin = compChoice === "Paper" ? false : true  ;
        }
        else if(userChoice==="Paper")
        {    
            // Rock ,Scissors
            userWin = compChoice === "Rock" ? false : true ;
        }
        else{
            //Rock , Paper
            userWin= compChoice === "Rock" ? false : true ;
       }
       showWinner(userWin,compChoice,userChoice);
    }
}

choices.forEach((choice)=>
{     
      choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
      })
});

document.addEventListener("DOMContentLoaded", () => {
let body=document.querySelector("body")
let currMode="dark"
// theme change

let info_div=document.querySelector("#info")
const icon_cont=document.querySelectorAll(".icon_panel .icon")
info_div.addEventListener("click",()=>{
   window.location.href='instruction.html'
})
let moonBtn=document.querySelector("#moon")

let head_cont=document.querySelector(".head_container")
let choice_cont=document.querySelector(".choices")
let score_cont=document.querySelector(".score-board")
let heading=document.querySelector("h1")
const scoreParagraphs = document.querySelectorAll('.score p');



let body_cont=document.querySelector("body")
function changeMode()
{
    if(currMode==="dark")
    {
        currMode="light"; 
        head_cont.classList.add("light_head") 
        choice_cont.classList.add("light_choice")
        score_cont.classList.add("light_choice")
        heading.classList.add("light_head")
        scoreParagraphs.forEach(p => {
            p.classList.add('score_light'); // Replace with your actual class
          });
        icon_cont.forEach(i=>{
            i.classList.add('icon.light')
        })
          


        head_cont.classList.remove("dark_head")
        choice_cont.classList.remove("dark_choice")
        score_cont.classList.remove("dark_choice")
        heading.classList.remove("dark_head")
        scoreParagraphs.forEach(p => {
            p.classList.remove('score_dark'); // Replace with your actual class
          });
        icon_cont.forEach(i=>{
            i.classList.remove('icon.dark')
        })
          
          


    }
    else{
        //currMode=>light
        currMode="dark"
        head_cont.classList.add("dark_head")
        choice_cont.classList.add("dark_choice")
        score_cont.classList.add("dark_choice")
        heading.classList.add("dark_head")
        scoreParagraphs.forEach(p => {
            p.classList.add('score_dark'); // Replace with your actual class
          });
          icon_cont.forEach(i=>{
            i.classList.add('icon.dark')
        })
          
          
        
 

        head_cont.classList.remove("light_head") 
        choice_cont.classList.remove("light_choice")
        score_cont.classList.remove("light_choice")
        heading.classList.remove("light_head")
        scoreParagraphs.forEach(p => {
            p.classList.remove('score_light'); // Replace with your actual class
          });
          icon_cont.forEach(i=>{
            i.classList.remove('icon.light')
        })

        
    }
    console.log(currMode)
}
moonBtn.addEventListener("click",changeMode)
});
